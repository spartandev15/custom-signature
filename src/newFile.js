/* extensions: [".vue"], target: 3.3, lib: "vue", jsxSlots: false, strictTemplates: false, skipTemplateCodegen: false, nativeTags: ["html","body","base","head","link","meta","style","title","address","article","aside","footer","header","hgroup","h1","h2","h3","h4","h5","h6","nav","section","div","dd","dl","dt","figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins","caption","col","colgroup","table","thead","tbody","td","th","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","template","blockquote","iframe","tfoot","svg","animate","animateMotion","animateTransform","circle","clipPath","color-profile","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistanceLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","hatch","hatchpath","image","line","linearGradient","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","solidcolor","stop","switch","symbol","text","textPath","tspan","unknown","use","view","slot","component"], dataAttributes: [], htmlAttributes: ["aria-*"], optionsWrapper: ["(await import('vue')).defineComponent(",")"], macros: {"defineProps":["defineProps"],"defineSlots":["defineSlots"],"defineEmits":["defineEmits"],"defineExpose":["defineExpose"],"defineModel":["defineModel"],"defineOptions":["defineOptions"],"withDefaults":["withDefaults"]}, plugins: [], hooks: [], experimentalDefinePropProposal: false, experimentalAdditionalLanguageModules: [], experimentalResolveStyleCssClasses: "scoped", experimentalModelPropName: {"":{"input":true},"value":{"input":{"type":"text"},"textarea":true,"select":true}}, experimentalUseElementAccessInTemplate: false */
export default (await import('vue')).defineComponent({
props: {
content: { type: Object, required: true },
uid: { type: Object, required: true },
},
setup(props) {
const { value, setValue } = wwLib.wwVariable.useComponentVariable({
uid: props.uid,
name: 'value',
type: 'string',
defaultValue: null,
});
return { value, setValue };
},
computed: {
text: {
get() {
return typeof this.value === 'string' ? this.value : '';
},
set(value) {
this.setValue(value);
},
},
},
data() {
return {
image: null,
};
},
methods: {
convertToImage() {
const sTextElement = document.getElementById('s-text'); const text = sTextElement.value; // Get the text from the input element   // Create a new canvas element  const canvas = document.createElement('canvas');   const context = canvas.getContext('2d');   // Define the canvas dimensions and style  canvas.width = 300; // Set the desired width  canvas.height = 60; // Set the desired height  context.font = 'italic 30px Cookie';   context.fillStyle = 'black';   context.fontWeight = '500';   // Clear the canvas  context.clearRect(0, 0, canvas.width, canvas.height);   // Draw the text on the canvas  context.fillText(text, 10, 40);   // Convert the canvas to a data URL  const dataURL = canvas.toDataURL('image/png');   // Set the data URL as the image source  this.image = dataURL;   // Update the value (if needed)  this.value = text; }
},
}
});
