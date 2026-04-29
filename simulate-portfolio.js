const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('C:/Users/yassi/Desktop/Portfolio 2/index.html', 'utf8');
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];

class ClassList {
  constructor(el){ this.el = el; this.set = new Set(); }
  add(...cls){ cls.forEach(c=>this.set.add(c)); this.el.className = [...this.set].join(' '); }
  remove(...cls){ cls.forEach(c=>this.set.delete(c)); this.el.className = [...this.set].join(' '); }
  contains(c){ return this.set.has(c); }
  toggle(c, force){ const on = force === undefined ? !this.set.has(c) : !!force; on ? this.add(c) : this.remove(c); return on; }
}
class El {
  constructor(tag='div') { this.tagName = tag.toUpperCase(); this.children = []; this.parent = null; this.attributes = {}; this.style = {}; this.className = ''; this.classList = new ClassList(this); this._text = ''; }
  set textContent(v){ this._text = String(v ?? ''); this.children = []; }
  get textContent(){ return this._text + this.children.map(c=>c.textContent || '').join(''); }
  setAttribute(k,v){ this.attributes[k]=String(v); if(k==='id') this.id=String(v); if(k==='class'){ this.className=String(v); this.classList.set = new Set(String(v).split(/\s+/).filter(Boolean)); } }
  getAttribute(k){ return this.attributes[k] ?? null; }
  hasAttribute(k){ return Object.prototype.hasOwnProperty.call(this.attributes,k); }
  append(...nodes){ nodes.forEach(n=>this.appendChild(n)); }
  appendChild(n){ if (typeof n === 'string') n = new TextNode(n); n.parent = this; this.children.push(n); return n; }
  addEventListener(type, fn){ this['on'+type]=fn; }
  contains(el){ for(let p=el; p; p=p.parent) if(p===this) return true; return false; }
  querySelector(sel){ return this.querySelectorAll(sel)[0] || null; }
  querySelectorAll(sel){ return query(this, sel); }
}
class TextNode extends El { constructor(text){ super('#text'); this._text = text; } appendChild(){ throw new Error('text'); } }
function walk(root, out=[]){ root.children.forEach(c=>{ out.push(c); walk(c,out); }); return out; }
function matches(el, sel){
  if(sel === '[data-i18n]') return el.hasAttribute && el.hasAttribute('data-i18n');
  if(sel === '[class]') return !!el.className;
  if(sel.startsWith('.')) return el.classList && el.classList.contains(sel.slice(1));
  if(sel === 'a') return el.tagName === 'A';
  return false;
}
function query(root, sel){
  if(sel === '#skillsList .skill') return query(ids.skillsList, '.skill');
  return walk(root).filter(el=>matches(el, sel));
}
const docEl = new El('html');
const body = new El('body'); docEl.appendChild(body);
const ids = {};
function add(id, tag='div', parent=body){ const e = new El(tag); e.setAttribute('id', id); ids[id]=e; parent.appendChild(e); return e; }
['skillsList','techChips','chipToggle','expList','projList','eduList','langList','contactCards','contactInitials','stat1v','stat2v','stat3v','stat1l','stat2l','stat3l','langFR','langEN','menuBtn','bgCanvas','cursorDot','cursorRing','marqueeTrack'].forEach(id=>add(id, id.startsWith('lang')||id==='menuBtn'||id==='chipToggle'?'button':'div'));
const navLinks = add('navLinks'); for(let i=0;i<5;i++) navLinks.appendChild(new El('a'));
ids.bgCanvas.getContext = () => ({ setTransform(){}, clearRect(){}, createRadialGradient(){return {addColorStop(){}}}, fillRect(){}, beginPath(){}, arc(){}, fill(){}, moveTo(){}, lineTo(){}, stroke(){}, set fillStyle(v){}, set strokeStyle(v){}, set lineWidth(v){} });
const document = { documentElement: docEl, body, createElement: t=>new El(t), createTextNode: t=>new TextNode(t), getElementById: id=>ids[id] || null, querySelectorAll: sel=>query(docEl, sel) };
const context = { document, window: { innerWidth: 1200, innerHeight: 800, devicePixelRatio: 1, addEventListener(){} }, localStorage: { getItem(){return null}, setItem(){} }, setTimeout(){}, requestAnimationFrame(){}, IntersectionObserver: function(){ this.observe=()=>{}; this.unobserve=()=>{}; }, Math, Number, String, Array, Set, console };
vm.createContext(context);
vm.runInContext(script, context);
function count(id, cls){ return query(ids[id], cls).length; }
console.log(JSON.stringify({
  skills: ids.skillsList.children.length,
  chips: ids.techChips.children.length,
  jobs: ids.expList.children.length,
  projects: ids.projList.children.length,
  eduCards: ids.eduList.children.length,
  langs: ids.langList.children.length,
  contact: ids.contactCards.children.length,
  chipToggle: ids.chipToggle.textContent,
  jobTextFr: ids.expList.textContent.includes('Développeur Web'),
  projectTextFr: ids.projList.textContent.includes('Système de Recommandation'),
  phoneLabel: ids.contactCards.textContent.includes('Téléphone')
}, null, 2));
context.applyLang('en');
console.log(JSON.stringify({
  jobsAfterEn: ids.expList.children.length,
  projectsAfterEn: ids.projList.children.length,
  eduAfterEn: ids.eduList.children.length,
  projectTextEn: ids.projList.textContent.includes('Book Recommendation System'),
  phoneLabelEn: ids.contactCards.textContent.includes('Phone')
}, null, 2));
context.applyLang('fr');
console.log(JSON.stringify({
  jobsAfterFrAgain: ids.expList.children.length,
  projectsAfterFrAgain: ids.projList.children.length,
  projectTextFrAgain: ids.projList.textContent.includes('Système de Recommandation')
}, null, 2));

