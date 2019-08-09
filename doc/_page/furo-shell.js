define(["exports","require"],function(_exports,_require){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$documentWaitDefault=documentWait;_exports.applyCss=applyCss;_exports.applyStyle=applyStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.createScopeStyle=createScopeStyle;_exports.detectMixin=detectMixin;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.elementsAreInvalid=elementsAreInvalid;_exports.findMatchingParen=findMatchingParen;_exports.forEachRule=forEachRule;_exports.gatherStyleText=gatherStyleText;_exports.getBuildComment=getBuildComment;_exports.getComputedStyleValue=getComputedStyleValue;_exports.getCssBuild=getCssBuild;_exports.getIsExtends=getIsExtends;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isKeyframesSelector=isKeyframesSelector;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.isTargetedBuild=isTargetedBuild;_exports.isUnscopedStyle=isUnscopedStyle;_exports.isValid=isValid;_exports.isValidating=isValidating;_exports.parse=parse;_exports.processUnscopedStyle=processUnscopedStyle;_exports.processVariableAndFallback=processVariableAndFallback;_exports.property$1=_exports.property=property;_exports.query$1=_exports.query=query;_exports.queryAll$1=_exports.queryAll=queryAll;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.rulesForStyle=rulesForStyle;_exports.setElementClassRaw=setElementClassRaw;_exports.splitSelectorList=splitSelectorList;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.stringify=stringify;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.templateIsValid=templateIsValid;_exports.templateIsValidating=templateIsValidating;_exports.toCssText=toCssText;_exports.updateNativeProperties=updateNativeProperties;_exports.SVGTemplateResult=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.PlacesIcons=_exports.NotificationIcons=_exports.NodePart$1=_exports.NodePart=_exports.MapsIcons=_exports.MIXIN_MATCH=_exports.MEDIA_MATCH=_exports.LitElement=_exports.Init$1=_exports.Init=_exports.ImageIcons=_exports.Iconset$1=_exports.Iconset=_exports.IS_VAR=_exports.HardwareIcons=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.FuroDocIcons=_exports.FuroBaseIcons=_exports.FBP=_exports.EventPart$1=_exports.EventPart=_exports.Env$1=_exports.Env=_exports.EditorIcons=_exports.DeviceIcons=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.CustomStyleProvider=_exports.CustomStyleInterfaceInterface=_exports.CommunicationIcons=_exports.CSSResult$1=_exports.CSSResult=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.BRACKETED=_exports.AvIcons=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.ANIMATION_MATCH=_exports.$updatingElement=_exports.$unscopedStyleHandler=_exports.$unsafeHtml=_exports.$theme=_exports.$templateResult=_exports.$templateMapDefault=_exports.$templateMap=_exports.$templateInstance=_exports.$templateFactory=_exports.$template=_exports.$system=_exports.$styling=_exports.$styleUtil=_exports.$styleSettings=_exports.$socialIcons=_exports.$shadyRender=_exports.$render=_exports.$placesIcons=_exports.$parts=_exports.$part=_exports.$notificationIcons=_exports.$navConfig=_exports.$modifyTemplate=_exports.$mapsIcons=_exports.$litHtml=_exports.$litElement=_exports.$imageIcons=_exports.$iconset$1=_exports.$iconset=_exports.$i18n=_exports.$hardwareIcons=_exports.$furo=_exports.$fbp=_exports.$environment=_exports.$editorIcons=_exports.$dom=_exports.$documentWait=_exports.$directive=_exports.$deviceIcons=_exports.$defaultTemplateProcessor=_exports.$decorators=_exports.$customStyleInterfaceDefault=_exports.$customStyleInterface=_exports.$cssTag=_exports.$cssParse=_exports.$communicationIcons=_exports.$commonUtils=_exports.$commonRegex=_exports.$baseIcons=_exports.$avIcons=_exports.$applyShimUtils=_exports.$applyShimDefault=_exports.$applyShim$1=void 0;_exports.wrap=_exports.unsafeHTML=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.types=_exports.templateCaches$1=_exports.templateCaches=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.scopingAttribute=_exports.reparentNodes$1=_exports.reparentNodes=_exports.render$1=_exports.render$2=_exports.render=_exports.removeNodes$1=_exports.removeNodes=_exports.parts$1=_exports.parts=_exports.nothing$1=_exports.nothing=_exports.notEqual$1=_exports.notEqual=_exports.nodeMarker=_exports.noChange$1=_exports.noChange=_exports.nav=_exports.nativeShadow=_exports.nativeCssVariables=_exports.markerRegex=_exports.marker=_exports.lastAttributeNameRegex=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.isPrimitive$1=_exports.isPrimitive=_exports.isIterable$1=_exports.isIterable=_exports.isDirective$1=_exports.isDirective=_exports.isCEPolyfill=_exports.i18n$1=_exports.i18n=_exports.html$2=_exports.html$1=_exports.html=_exports.eventOptions$1=_exports.eventOptions=_exports.disableRuntime=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=_exports.defaultConverter$1=_exports.defaultConverter=_exports.customElement$1=_exports.customElement=_exports.cssBuild=_exports.css$1=_exports.css=_exports.createMarker$1=_exports.createMarker=_exports.boundAttributeSuffix=_exports.VAR_CONSUMED=_exports.VAR_ASSIGN=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.Theme$1=_exports.Theme=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.Template$1=_exports.Template=_exports.Sys$1=_exports.Sys=_exports.Styling=_exports.StyleNode=_exports.SocialIcons=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=void 0;_require=babelHelpers.interopRequireWildcard(_require);const nav=[{group:"Packages",items:[{label:"Getting input",icon:"input",href:"input/doc/"},{label:"Dealing with data",icon:"cloud",href:"data/doc/"},{label:"Data UI",icon:"view-column",href:"data-ui/doc/"},{label:"Data Input",icon:"input",href:"data-input/doc/"},{label:"Layouts helper",icon:"dashboard",href:"layout/doc/"},{label:"Forms helper",icon:"dashboard",href:"form/doc/"},{label:"App Config",icon:"settings",href:"config/doc/"},{label:"Navigation",icon:"tab",href:"navigation/doc/"},{label:"Routing",icon:"arrow-forward",href:"route/doc/"},{label:"Timing",icon:"alarm",href:"timing/doc/"},{label:"Math",icon:"timeline",href:"math/doc/"},{label:"Logic",icon:"av:web",href:"logic/doc/"},{label:"Util",icon:"star-border",href:"util/doc/"},{label:"\uD83D\uDC80 Experiments",icon:"image:colorize",href:"experiments/doc/"}]},{group:"The Framework",items:[{label:"Overview",icon:"create",href:"doc/framework/"},{label:"Styling",icon:"image:color-lens",href:"md/api-design/"},{label:"Theming",icon:"image:brush",href:"doc/furo-config/"},{label:"Internationalisation",icon:"create",href:"md/api-design/"},{label:"Configuration",icon:"create",href:"md/api-design/"}]},{group:"Misc",items:[{label:"Test Coverage",icon:"create",href:"md/api-design/"}]}];_exports.nav=nav;var nav_config={nav:nav};_exports.$navConfig=nav_config;const FuroDocIcons={github:"<g><path d=\"M12,2C6.48,2,2,6.59,2,12.25c0,4.53,2.87,8.37,6.84,9.73c0.5,0.09,0.68-0.22,0.68-0.49c0-0.24-0.01-0.89-0.01-1.74c-2.78,0.62-3.37-1.37-3.37-1.37c-0.45-1.18-1.11-1.5-1.11-1.5c-0.91-0.64,0.07-0.62,0.07-0.62c1,0.07,1.53,1.06,1.53,1.06c0.89,1.57,2.34,1.11,2.91,0.85c0.09-0.66,0.35-1.11,0.63-1.37c-2.22-0.26-4.56-1.14-4.56-5.07c0-1.12,0.39-2.03,1.03-2.75c-0.1-0.26-0.45-1.3,0.1-2.71c0,0,0.84-0.28,2.75,1.05c0.8-0.23,1.65-0.34,2.5-0.34c0.85,0,1.7,0.12,2.5,0.34c1.91-1.33,2.75-1.05,2.75-1.05c0.55,1.41,0.2,2.45,0.1,2.71c0.64,0.72,1.03,1.63,1.03,2.75c0,3.94-2.34,4.81-4.57,5.06c0.36,0.32,0.68,0.94,0.68,1.9c0,1.37-0.01,2.48-0.01,2.81c0,0.27,0.18,0.59,0.69,0.49c3.97-1.36,6.83-5.2,6.83-9.73C22,6.59,17.52,2,12,2\"></path></g>"};_exports.FuroDocIcons=FuroDocIcons;var iconset={FuroDocIcons:FuroDocIcons};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$iconset=iconset;const directives=new WeakMap,directive=f=>(...args)=>{const d=f(...args);directives.set(d,!0);return d};/**
                                   * Brands a function as a directive factory function so that lit-html will call
                                   * the function during template rendering, rather than passing as a value.
                                   *
                                   * A _directive_ is a function that takes a Part as an argument. It has the
                                   * signature: `(part: Part) => void`.
                                   *
                                   * A directive _factory_ is a function that takes arguments for data and
                                   * configuration and returns a directive. Users of directive usually refer to
                                   * the directive factory as the directive. For example, "The repeat directive".
                                   *
                                   * Usually a template author will invoke a directive factory in their template
                                   * with relevant arguments, which will then return a directive function.
                                   *
                                   * Here's an example of using the `repeat()` directive factory that takes an
                                   * array and a function to render an item:
                                   *
                                   * ```js
                                   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
                                   * ```
                                   *
                                   * When `repeat` is invoked, it returns a directive function that closes over
                                   * `items` and the template function. When the outer template is rendered, the
                                   * return directive function is called with the Part for the expression.
                                   * `repeat` then performs it's custom logic to render multiple items.
                                   *
                                   * @param f The directive factory function. Must be a function that returns a
                                   * function of the signature `(part: Part) => void`. The returned function will
                                   * be called with the part object.
                                   *
                                   * @example
                                   *
                                   * import {directive, html} from 'lit-html';
                                   *
                                   * const immutable = directive((v) => (part) => {
                                   *   if (part.value !== v) {
                                   *     part.setValue(v)
                                   *   }
                                   * });
                                   */_exports.directive$1=_exports.directive=directive;const isDirective=o=>{return"function"===typeof o&&directives.has(o)};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={directive:directive,isDirective:isDirective};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * True if the custom elements polyfill is in use.
        */_exports.$directive=directive$1;const isCEPolyfill=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0;/**
                                                                                                                                   * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
                                                                                                                                   * into another container (could be the same container), before `before`. If
                                                                                                                                   * `before` is null, it appends the nodes to the container.
                                                                                                                                   */_exports.isCEPolyfill=isCEPolyfill;const reparentNodes=(container,start,end=null,before=null)=>{while(start!==end){const n=start.nextSibling;container.insertBefore(start,before);start=n}};/**
    * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
    * `container`.
    */_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;const removeNodes=(container,start,end=null)=>{while(start!==end){const n=start.nextSibling;container.removeChild(start);start=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};/**
    * @license
    * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * A sentinel value that signals that a value was handled by a directive and
        * should not be written to the DOM.
        */_exports.$dom=dom;const noChange={};/**
                             * A sentinel value that signals a NodePart to fully clear its content.
                             */_exports.noChange$1=_exports.noChange=noChange;const nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={noChange:noChange,nothing:nothing};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * An expression marker with embedded unique key to avoid collision with
        * possible text in templates.
        */_exports.$part=part;const marker=`{{lit-${(Math.random()+"").slice(2)}}}`;/**
                                                                    * An expression marker used text-positions, multi-binding attributes, and
                                                                    * attributes with markup-like text values.
                                                                    */_exports.marker=marker;const nodeMarker=`<!--${marker}-->`;_exports.nodeMarker=nodeMarker;const markerRegex=new RegExp(`${marker}|${nodeMarker}`);/**
                                                                   * Suffix appended to all bound attribute names.
                                                                   */_exports.markerRegex=markerRegex;const boundAttributeSuffix="$lit$";/**
                                              * An updateable Template that tracks the location of dynamic parts.
                                              */_exports.boundAttributeSuffix=boundAttributeSuffix;class Template{constructor(result,element){this.parts=[];this.element=element;const nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);// Keeps track of the last index associated with a part. We try to delete
// unnecessary nodes, but we never want to associate two different parts
// to the same index. They must have a constant node between.
let lastPartIndex=0,index=-1,partIndex=0;const{strings,values:{length}}=result;while(partIndex<length){const node=walker.nextNode();if(null===node){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();continue}index++;if(1===node.nodeType/* Node.ELEMENT_NODE */){if(node.hasAttributes()){const attributes=node.attributes,{length}=attributes;// Per
// https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
// attributes are not guaranteed to be returned in document order.
// In particular, Edge/IE can return them out of order, so we cannot
// assume a correspondence between part index and attribute index.
let count=0;for(let i=0;i<length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++}}while(0<count--){// Get the template literal section leading up to the first
// expression in this attribute
const stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName);// Find the attribute name
node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings:statics});partIndex+=statics.length-1}}if("TEMPLATE"===node.tagName){stack.push(node);walker.currentNode=node.content}}else if(3===node.nodeType/* Node.TEXT_NODE */){const data=node.data;if(0<=data.indexOf(marker)){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(let i=0;i<lastIndex;i++){let insert,s=strings[i];if(""===s){insert=createMarker()}else{const match=lastAttributeNameRegex.exec(s);if(null!==match&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3]}insert=document.createTextNode(s)}parent.insertBefore(insert,node);this.parts.push({type:"node",index:++index})}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(""===strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=strings[lastIndex]}// We have a part for each match found
partIndex+=lastIndex}}else if(8===node.nodeType/* Node.COMMENT_NODE */){if(node.data===marker){const parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(null===node.previousSibling||index===lastPartIndex){index++;parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{let i=-1;while(-1!==(i=node.data.indexOf(marker,i+1))){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:"node",index:-1});partIndex++}}}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}_exports.Template$1=_exports.Template=Template;const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return 0<=index&&str.slice(index)===suffix},isTemplatePartActive=part=>-1!==part.index;_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker=()=>document.createComment("");/**
                                                               * This regex extracts the attribute name preceding an attribute-position
                                                               * expression. It does this by matching the syntax allowed for attributes
                                                               * against the string literal directly preceding the expression, assuming that
                                                               * the expression is in an attribute-value position.
                                                               *
                                                               * See attributes in the HTML spec:
                                                               * https://www.w3.org/TR/html5/syntax.html#elements-attributes
                                                               *
                                                               * " \x09\x0a\x0c\x0d" are HTML space characters:
                                                               * https://www.w3.org/TR/html5/infrastructure.html#space-characters
                                                               *
                                                               * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
                                                               * space character except " ".
                                                               *
                                                               * So an attribute is:
                                                               *  * The name: any character except a control character, space character, ('),
                                                               *    ("), ">", "=", or "/"
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by "="
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by:
                                                               *    * Any character except space, ('), ("), "<", ">", "=", (`), or
                                                               *    * (") then any non-("), or
                                                               *    * (') then any non-(')
                                                               */_exports.createMarker$1=_exports.createMarker=createMarker;const lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template;class TemplateInstance{constructor(template,processor,options){this.__parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this.__parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this.__parts){if(part!==void 0){part.commit()}}}_clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari dooes not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);let partIndex=0,nodeIndex=0,part,node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(void 0);partIndex++;continue}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
while(nodeIndex<part.index){nodeIndex++;if("TEMPLATE"===node.nodeName){stack.push(node);walker.currentNode=node.content}if(null===(node=walker.nextNode())){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();node=walker.nextNode()}}// We've arrived at our part's node.
if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling);this.__parts.push(part)}else{this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}/**
     * Returns a string of HTML used to create a `<template>` element.
     */getHTML(){const l=this.strings.length-1;let html="",isCommentBinding=!1;for(let i=0;i<l;i++){const s=this.strings[i],commentOpen=s.lastIndexOf("<!--");// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment poisition.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
// We're in comment position if we have a comment open with no following
// comment close. Because <-- can appear in an attribute value there can
// be false positives.
isCommentBinding=(-1<commentOpen||isCommentBinding)&&-1===s.indexOf("-->",commentOpen+1);// Check to see if we have an attribute-like sequence preceeding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
const attributeMatch=lastAttributeNameRegex.exec(s);if(null===attributeMatch){// We're only in this branch if we don't have a attribute-like
// preceeding sequence. For comments, this guards against unusual
// attribute values like <div foo="<!--${'bar'}">. Cases like
// <!-- foo=${'bar'}--> are handled correctly in the attribute branch
// below.
html+=s+(isCommentBinding?marker:nodeMarker)}else{// For attributes we use just a marker sentinel, and also append a
// $lit$ suffix to the name to opt-out of attribute-specific parsing
// that IE and Edge do for style and certain SVG attributes.
html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker}}html+=this.strings[l];return html}getTemplateElement(){const template=document.createElement("template");template.innerHTML=this.getHTML();return template}}/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;const isPrimitive=value=>{return null===value||!("object"===typeof value||"function"===typeof value)};_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;const isIterable=value=>{return Array.isArray(value)||// tslint:disable-next-line:no-any
!!(value&&value[Symbol.iterator])};/**
    * Writes attribute values to the DOM for a group of AttributeParts bound to a
    * single attibute. The value is only set once even if there are multiple parts
    * for an attribute.
    */_exports.isIterable$1=_exports.isIterable=isIterable;class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1;let text="";for(let i=0;i<l;i++){text+=strings[i];const part=this.parts[i];if(part!==void 0){const v=part.value;if(isPrimitive(v)||!isIterable(v)){text+="string"===typeof v?v:v+""}else{for(const t of v){text+="string"===typeof t?t:t+""}}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}/**
   * A Part that controls all or part of an attribute value.
   */_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;class AttributePart{constructor(committer){this.value=void 0;this.committer=committer}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive=this.value;this.value=noChange;directive(this)}if(this.value===noChange){return}this.committer.commit()}}/**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */_exports.AttributePart$1=_exports.AttributePart=AttributePart;class NodePart{constructor(options){this.value=void 0;this.__pendingValue=void 0;this.options=options}/**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}/**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker())}/**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}const value=this.__pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this.__commitText(value)}}else if(value instanceof TemplateResult){this.__commitTemplateResult(value)}else if(value instanceof Node){this.__commitNode(value)}else if(isIterable(value)){this.__commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{// Fallback, will render the string representation
this.__commitText(value)}}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}__commitNode(value){if(this.value===value){return}this.clear();this.__insert(value);this.value=value}__commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;// If `value` isn't already a string, we explicitly convert it here in case
// it can't be implicitly converted - i.e. it's a symbol.
const valueAsString="string"===typeof value?value:value+"";if(node===this.endNode.previousSibling&&3===node.nodeType/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=valueAsString}else{this.__commitNode(document.createTextNode(valueAsString))}this.value=value}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template){this.value.update(value.values)}else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance}}__commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear()}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}/**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */_exports.NodePart$1=_exports.NodePart=NodePart;class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this.__pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}this.value=value}this.__pendingValue=noChange}}/**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;// tslint:disable-next-line:no-any
this.element[this.name]=this._getValue()}}}_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;class PropertyPart extends AttributePart{}// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;let eventOptionsSupported=!1;try{const options={get capture(){eventOptionsSupported=!0;return!1}};// tslint:disable-next-line:no-any
window.addEventListener("test",options,options);// tslint:disable-next-line:no-any
window.removeEventListener("test",options,options)}catch(_e){}class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this.__pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options)}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=newListener;this.__pendingValue=noChange}handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
_exports.EventPart$1=_exports.EventPart=EventPart;const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);var parts={isPrimitive:isPrimitive,isIterable:isIterable,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;class DefaultTemplateProcessor{/**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const committer=new PropertyCommitter(element,name.slice(1),strings);return committer.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const committer=new AttributeCommitter(element,name,strings);return committer.parts}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */handleTextExpression(options){return new NodePart(options)}}_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;const defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
const key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===void 0){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template)}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template}const templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;const parts$1=new WeakMap;/**
                                     * Renders a template result or other value to a container.
                                     *
                                     * To update a container with new values, reevaluate the template literal and
                                     * call `render` with the new result.
                                     *
                                     * @param result Any value renderable by NodePart - typically a TemplateResult
                                     *     created by evaluating a template tag like `html` or `svg`.
                                     * @param container A DOM parent to render to. The entire contents are either
                                     *     replaced, or efficiently updated if the same result type was previous
                                     *     rendered there.
                                     * @param options RenderOptions for the entire render tree rendered to this
                                     *     container. Render options must *not* change between renders to the same
                                     *     container, as those changes will not effect previously rendered DOM.
                                     */_exports.parts$1=_exports.parts=parts$1;const render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render$2=_exports.render=render;var render$1={parts:parts$1,render:render};// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
_exports.$render=render$1;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");/**
                                                                                * Interprets a template literal as an HTML template that can efficiently
                                                                                * render to and update a container.
                                                                                */const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor);/**
                                                                                                                    * Interprets a template literal as an SVG template that can efficiently
                                                                                                                    * render to and update a container.
                                                                                                                    */_exports.html$2=_exports.html$1=_exports.html=html;const svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isIterable:isIterable,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;const walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
                                                                            * Removes the list of nodes from a Template safely. In addition to removing
                                                                            * nodes from the Template, the Template part indices are updated to match
                                                                            * the mutated Template DOM.
                                                                            *
                                                                            * As the template is walked the removal state is tracked and
                                                                            * part indices are adjusted as needed.
                                                                            *
                                                                            * div
                                                                            *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                            *     div
                                                                            *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                            *         div
                                                                            * div <-- stop removing since previous sibling is the removing node (div#1,
                                                                            * removed 4 nodes)
                                                                            */function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(null===currentRemovingNode){currentRemovingNode=node}}// When removing, increment count by which to adjust subsequent part indices
if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=null!==currentRemovingNode?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=11===node.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};_exports.$modifyTemplate=modifyTemplate;const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected. `+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and `+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}/**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(template=>{const{element:{content}}=template,styles=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);// If `renderedDOM` is stamped from a Template, then we need to edit that
// Template's underlying template element. Otherwise, we create one here
// to give to ShadyCSS, which still requires one while scoping.
const templateElement=!!template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),{length}=styles;// Move styles out of rendered DOM and store.
// If there are no styles, skip unnecessary work
if(0===length){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
//
// ShadyCSS will only update styles containing @apply in the template
// given to `prepareTemplateStyles`. If no lit Template was given,
// ShadyCSS will not be able to update uses of @apply in any relevant
// template. However, this is not a problem because we only create the
// template for the purpose of supporting `prepareAdoptedCssText`,
// which doesn't support @apply at all.
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);return}const condensedStyle=document.createElement("style");// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
const content=templateElement.content;if(!!template){insertNodeIntoTemplate(template,condensedStyle,content.firstChild)}else{content.insertBefore(condensedStyle,content.firstChild)}// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style){// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else if(!!template){// When no style is left in the template, parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// There can be no style in the template in 2 cases (1) when Shady DOM
// is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
// is in use ShadyCSS removes the style if it contains no content.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
content.insertBefore(condensedStyle,content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{if(!options||"object"!==typeof options||!options.scopeName){throw new Error("The `scopeName` option is required.")}const scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){const part=parts$1.get(renderContainer);parts$1.delete(renderContainer);// ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
// that should apply to `renderContainer` even if the rendered value is
// not a TemplateInstance. However, it will only insert scoped styles
// into the document if `prepareTemplateStyles` has already been called
// for the given scope name.
const template=part.value instanceof TemplateInstance?part.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,template);removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,part)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};_exports.render$1=render$2;var shadyRender={render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$shadyRender=shadyRender;var _a;/**
         * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
         * replaced at compile time by the munged name for object[property]. We cannot
         * alias this function, so we have to use a small shim that has the same
         * behavior when not compiling.
         */window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return null==value?value:JSON.stringify(value);}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}};/**
    * Change function that returns true if `value` is different from `oldValue`.
    * This method is used as the default for a property's `hasChanged` function.
    */_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;const notEqual=(value,old)=>{// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value)};_exports.notEqual$1=_exports.notEqual=notEqual;const defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},microtaskPromise=Promise.resolve(!0),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,STATE_HAS_CONNECTED=1<<5,finalized="finalized";/**
                                * Base element class which manages element properties and attributes. When
                                * properties change, the `update` method is asynchronously called. This method
                                * should be supplied by subclassers to render updates as desired.
                                */class UpdatingElement extends HTMLElement{constructor(){super();this._updateState=0;this._instanceProperties=void 0;this._updatePromise=microtaskPromise;this._hasConnectedResolver=void 0;/**
                                             * Map with keys for any properties that have changed since the last
                                             * update cycle with previous values.
                                             */this._changedProperties=new Map;/**
                                          * Map with keys of properties that should be reflected when updated.
                                          */this._reflectingProperties=void 0;this.initialize()}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */static get observedAttributes(){// note: piggy backing on this to ensure we're finalized.
this.finalize();const attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach((v,p)=>{const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */static _ensureClassProperties(){// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}}/**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */static createProperty(name,options=defaultPropertyDeclaration){// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`;Object.defineProperty(this.prototype,name,{// tslint:disable-next-line:no-any no symbol in index
get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this._requestUpdate(name,oldValue)},configurable:!0,enumerable:!0})}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */static finalize(){// finalize any superclasses
const superCtor=Object.getPrototypeOf(this);if(!superCtor.hasOwnProperty(finalized)){superCtor.finalize()}this[finalized]=!0;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map;// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];// support symbols in properties (IE11 does not support this)
// This for/of is ok because propKeys is an array
for(const p of propKeys){// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(p,props[p])}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */static _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}const type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */initialize(){this._saveInstanceProperties();// ensures first update will be caught by an early access of
// `updateComplete`
this._requestUpdate()}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */_saveInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}})}/**
     * Applies previously saved instance properties.
     */_applyInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach((v,p)=>this[p]=v);this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|STATE_HAS_CONNECTED;// Ensure first connection completes an update. Updates cannot complete
// before connection and if one is pending connection the
// `_hasConnectionResolver` will exist. If so, resolve it to complete the
// update, otherwise requestUpdate.
if(this._hasConnectedResolver){this._hasConnectedResolver();this._hasConnectedResolver=void 0}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */disconnectedCallback(){}/**
                             * Synchronizes property values when attributes change.
                             */attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){const attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===void 0){return}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(propName!==void 0){const options=ctor._classProperties.get(propName)||defaultPropertyDeclaration;// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}/**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */_requestUpdate(name,oldValue){let shouldRequestUpdate=!0;// If we have a property key, perform property update steps.
if(name!==void 0){const ctor=this.constructor,options=ctor._classProperties.get(name)||defaultPropertyDeclaration;if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}// Add to reflecting properties set.
// Note, it's important that every change has a chance to add the
// property to `_reflectingProperties`. This ensures setting
// attribute + property reflects correctly.
if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{// Abort the request if the property should not be considered changed.
shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._enqueueUpdate()}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */requestUpdate(name,oldValue){this._requestUpdate(name,oldValue);return this.updateComplete}/**
     * Sets up the element to asynchronously update.
     */_enqueueUpdate(){var _this=this;return babelHelpers.asyncToGenerator(function*(){// Mark state updating...
_this._updateState=_this._updateState|STATE_UPDATE_REQUESTED;let resolve,reject;const previousUpdatePromise=_this._updatePromise;_this._updatePromise=new Promise((res,rej)=>{resolve=res;reject=rej});try{// Ensure any previous update has resolved before updating.
// This `await` also ensures that property changes are batched.
yield previousUpdatePromise}catch(e){}// Ignore any previous errors. We only care that the previous cycle is
// done. Any error should have been handled in the previous update.
// Make sure the element has connected before updating.
if(!_this._hasConnected){yield new Promise(res=>_this._hasConnectedResolver=res)}try{const result=_this.performUpdate();// If `performUpdate` returns a Promise, we await it. This is done to
// enable coordinating updates with a scheduler. Note, the result is
// checked to avoid delaying an additional microtask unless we need to.
if(null!=result){yield result}}catch(e){reject(e)}resolve(!_this._hasRequestedUpdate)})()}get _hasConnected(){return this._updateState&STATE_HAS_CONNECTED}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}/**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */performUpdate(){// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties()}let shouldUpdate=!1;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties)}}catch(e){// Prevent `firstUpdated` and `updated` from running when there's an
// update exception.
shouldUpdate=!1;throw e}finally{// Ensure element can accept additional updates after an exception.
this._markUpdated()}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */get updateComplete(){return this._getUpdateComplete()}/**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */_getUpdateComplete(){return this._updatePromise}/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */shouldUpdate(_changedProperties){return!0}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */update(_changedProperties){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach((v,k)=>this._propertyToAttribute(k,this[k],v));this._reflectingProperties=void 0}}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */updated(_changedProperties){}/**
                                  * Invoked when the element is first updated. Implement to perform one time
                                  * work on the element after update.
                                  *
                                  * Setting properties inside this method will trigger the element to update
                                  * again after this update cycle completes.
                                  *
                                  * * @param _changedProperties Map of changed properties with old values
                                  */firstUpdated(_changedProperties){}}_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;_a=finalized;/**
                 * Marks class as having finished creating properties.
                 */UpdatingElement[_a]=!0;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$updatingElement=updatingElement;const legacyCustomElement=(tagName,clazz)=>{window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz},standardCustomElement=(tagName,descriptor)=>{const{kind,elements}=descriptor;return{kind,elements,// This callback is called once the class is otherwise fully defined
finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=tagName=>classOrDescriptor=>"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor);_exports.customElement$1=_exports.customElement=customElement;const standardProperty=(options,element)=>{// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign({},element,{finisher(clazz){clazz.createProperty(element.key,options)}})}else{// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=(options,proto,name)=>{proto.constructor.createProperty(name,options)};/**
    * A property decorator which creates a LitElement property which reflects a
    * corresponding attribute value. A `PropertyDeclaration` may optionally be
    * supplied to configure property features.
    *
    * @ExportDecoratedItems
    */function property(options){// tslint:disable-next-line:no-any decorator
return(protoOrDescriptor,name)=>name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}/**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   *
   * @ExportDecoratedItems
   */function query(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}/**
   * A property decorator that converts a class property into a getter
   * that executes a querySelectorAll on the element's renderRoot.
   *
   * @ExportDecoratedItems
   */function queryAll(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelectorAll(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}const legacyQuery=(descriptor,proto,name)=>{Object.defineProperty(proto,name,descriptor)},standardQuery=(descriptor,element)=>({kind:"method",placement:"prototype",key:element.key,descriptor}),standardEventOptions=(options,element)=>{return Object.assign({},element,{finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
(options,proto,name)=>{Object.assign(proto[name],options)},eventOptions=options=>// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
(protoOrDescriptor,name)=>name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor);_exports.eventOptions$1=_exports.eventOptions=eventOptions;var decorators={customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};/**
   @license
   Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */_exports.$decorators=decorators;const supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;const constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
get styleSheet(){if(this._styleSheet===void 0){// Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
// is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}toString(){return this.cssText}}/**
   * Wrap a value for interpolation in a css tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */_exports.CSSResult$1=_exports.CSSResult=CSSResult;const unsafeCSS=value=>{return new CSSResult(value+"",constructionToken)};_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;const textFromCSSResult=value=>{if(value instanceof CSSResult){return value.cssText}else if("number"===typeof value){return value}else{throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},css=(strings,...values)=>{const cssText=values.reduce((acc,v,idx)=>acc+textFromCSSResult(v)+strings[idx+1],strings[0]);return new CSSResult(cssText,constructionToken)};/**
    * Template tag which which can be used with LitElement's `style` property to
    * set element styles. For security reasons, only literal string values may be
    * used. To incorporate non-literal values `unsafeCSS` may be used inside a
    * template string part.
    */_exports.css$1=_exports.css=css;var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
_exports.$cssTag=cssTag;(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");/**
                                                                                      * Minimal implementation of Array.prototype.flat
                                                                                      * @param arr the array to flatten
                                                                                      * @param result the accumlated result
                                                                                      */function arrayFlat(styles,result=[]){for(let i=0,length=styles.length;i<length;i++){const value=styles[i];if(Array.isArray(value)){arrayFlat(value,result)}else{result.push(value)}}return result}/** Deeply flattens styles array. Uses native flat if available. */const flattenStyles=styles=>styles.flat?styles.flat(1/0):arrayFlat(styles);class LitElement extends UpdatingElement{/** @nocollapse */static finalize(){// The Closure JS Compiler does not always preserve the correct "this"
// when calling static super methods (b/137460243), so explicitly bind.
super.finalize.call(this);// Prepare styling that is stamped at first render time. Styling
// is built from user provided `styles` or is inherited from the superclass.
this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}/** @nocollapse */static _getUniqueStyles(){// Take care not to call `this.styles` multiple times since this generates
// new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
const userStyles=this.styles,styles=[];if(Array.isArray(userStyles)){const flatStyles=flattenStyles(userStyles),styleSet=flatStyles.reduceRight((set,s)=>{set.add(s);// on IE set.add does not return the set.
return set},new Set);// As a performance optimization to avoid duplicated styling that can
// occur especially when composing via subclassing, de-duplicate styles
// preserving the last item in the list. The last item is kept to
// try to preserve cascade order with the assumption that it's most
// important that last added styles override previous styles.
// Array.from does not work on Set in IE
styleSet.forEach(v=>styles.unshift(v))}else if(userStyles){styles.push(userStyles)}return styles}/**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */initialize(){super.initialize();this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot){this.adoptStyles()}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */createRenderRoot(){return this.attachShadow({mode:"open"})}/**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */adoptStyles(){const styles=this.constructor._styles;if(0===styles.length){return}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it.
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s=>s.cssText),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(s=>s.styleSheet)}else{// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=!0}}connectedCallback(){super.connectedCallback();// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */update(changedProperties){super.update(changedProperties);const templateResult=this.render();if(templateResult instanceof TemplateResult){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(s=>{const style=document.createElement("style");style.textContent=s.cssText;this.renderRoot.appendChild(style)})}}/**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */render(){}}/**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   *
   * Note this property name is a string to prevent breaking Closure JS Compiler
   * optimizations. See updating-element.ts for more information.
   */_exports.LitElement=LitElement;LitElement.finalized=!0;/**
                                 * Render method used to render the lit-html TemplateResult to the element's
                                 * DOM.
                                 * @param {TemplateResult} Template to render.
                                 * @param {Element|DocumentFragment} Node into which to render.
                                 * @param {String} Element name.
                                 * @nocollapse
                                 */LitElement.render=render$2;var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$litElement=litElement;class Theme{/**
   * Get the theme for the component if it exists
   * @param componentName
   * @return {*}
   */static getThemeForComponent(componentName){return this.theme[componentName]}/**
     * Register a themeset
     * @param theme
     */static registerThemeset(theme){this.theme=theme}}_exports.Theme$1=_exports.Theme=Theme;Theme.theme={};var theme={Theme:Theme};/**
    * furo-fbp base class
    *
    * [read the guide](/guide/md/fbp-wires/)
    *
    * ## Tracing all wires in a component
    *
    * Log all triggered wires for this component. This function may help you at debugging.
    * **Attention** This works only with wires with at least 1 receiver.
    *
    * Select your element in the dev console and call `$0._FBPTraceWires()`
    *
    * To trace your element immediately after fbp is ready, use this snippet
    *
    * ```
    * _FBPReady(){
    *   super._FBPReady();
    *   this._FBPTraceWires()
    *}
    * ```
    * ## Debuging a wire
    *
    * Get information for the triggered wire. This function may help you at debugging.
    *
    * Select your element in the dev console and call `$0._FBPDebug('--dataReceived')`
    *
    *
    *
    *
    * @summary Please read the guide for a better understanding
    * @polymer
    * @mixinFunction FBP
    */_exports.$theme=theme;const FBP=superClass=>{/**
   * @polymerMixinClass
   */return class extends superClass{constructor(){super();this.__FBPEventlistener=[];this.__wirebundle={};this.__wireQueue=[]}//  Auto append fbp for Polymer
_attachDom(dom){this._appendFBP(dom);super._attachDom(dom)}// Auto append fbp for lit elements
firstUpdated(changedProperties){// ensure to append only once
if(!this.__fbpAppended){this._appendFBP(this.shadowRoot);this.__fbpAppended=!0}super.firstUpdated()}/**
       * Triggers a wire
       * @param wire (String) Name of the wire like --buttonClicked
       * @param detailData (*) data to pass
       * @public
       */_FBPTriggerWire(wire,detailData){if(this.__fbp_ready){if(this.__wirebundle[wire]){this.__wirebundle[wire].map(receiver=>{// check for hooks
if("function"===typeof receiver){receiver(detailData)}else{if("function"===typeof receiver.element[receiver.method]){let response;// array spreaden
if(Array.isArray(detailData)&&1<receiver.element[receiver.method].length){response=receiver.element[receiver.method].apply(receiver.element,detailData)}else{let data=detailData;if(receiver.path){data=this._pathGet(detailData,receiver.path)}response=receiver.element[receiver.method](data)}// @-ƒ-function auslösen
let customEvent=new Event("\u0192-"+receiver.attrName,{composed:!1,bubbles:!1});customEvent.detail=response;receiver.element.dispatchEvent(customEvent)}else if(receiver.property){let data=detailData;if(receiver.path){data=this._pathGet(detailData,receiver.path)}receiver.element[receiver.property]=data}else{console.warn(receiver.method+" is neither a listener nor a function of "+receiver.element.nodeName,receiver.element)}}})}}else{this.__enqueueTrigger(wire,detailData)}}/**
       *
       * @param wire (String) Name of the wire
       * @param cb (function) Callback function cb(detailData)
       * @param [before] (Boolean) append before the components are triggered, default is false
       * @returns {number} Index of hook
       * @public
       */_FBPAddWireHook(wire,cb,before){before=before||!1;if(this.__wirebundle[wire]){if(before){this.__wirebundle[wire].unshift(cb);return 0}else{let l=this.__wirebundle[wire].push(cb);return l-1}}else{this.__wirebundle[wire]=[cb];return 1}}/**
       * Log all triggered wires for this component. This function may help you at debugging.
       * Select your element in the dev console and call `$0._FBPTraceWires()`
       *
       *
       * @public
       */_FBPTraceWires(){let self=this;for(let wire in this.__wirebundle){this._FBPAddWireHook(wire,e=>{var ua=navigator.userAgent.toLowerCase();let agent=!0;if(-1!=ua.indexOf("safari")){if(-1<ua.indexOf("chrome")){agent=!0;// Chrome
}else{agent=!1;// Safari
}}if(agent){console.group("Trace for",this.nodeName+": "+wire);console.table([{host:self,wire:wire,data:e}]);console.groupCollapsed("Data");console.log(e);console.groupEnd();console.groupCollapsed("Target Elements");console.table(self.__wirebundle[wire]);console.groupEnd();console.groupCollapsed("Call Stack");console.log(new Error().stack);console.groupEnd();console.groupEnd()}},!0)}}/**
       * Get information for the triggered wire. This function may help you at debugging.
       * Select your element in the dev console and call `$0._FBPDebug('--dataReceived')`
       *
       * @param wire
       * @param openDebugger opens the debugger console, so you can inspect your component.
       * @public
       */_FBPDebug(wire,openDebugger){let self=this;this._FBPAddWireHook(wire,e=>{if(openDebugger){debugger}else{var ua=navigator.userAgent.toLowerCase();let agent=!0;if(-1!=ua.indexOf("safari")){if(-1<ua.indexOf("chrome")){agent=!0;// Chrome
}else{agent=!1;// Safari
}}if(agent){console.group("Debug",this.nodeName+": "+wire);console.group("Target Elements");console.table(self.__wirebundle[wire]);console.groupEnd();console.groupCollapsed("Data");console.log(e);console.groupEnd();console.groupCollapsed("Call Stack");console.log(new Error().stack);console.groupEnd();console.groupEnd()}}},!0)}__toCamelCase(str){return str.replace(/-([a-z])/g,function(g){return g[1].toUpperCase()})}/**
       * parses the dom for flowbased programming tags
       * @param dom dom node
       * @private
       */_appendFBP(dom){let self=this,wirebundle=this.__wirebundle,nl=dom.querySelectorAll("*"),l=nl.length-1;for(var x=l;0<=x;--x){let element=nl[x];// template is=flow-repeat..
if("TEMPLATE"===element.tagName){if("flow-repeat"===element.getAttribute("is")){let original=element,replacement=document.createElement("flow-repeat"),l=original.attributes.length;// Create a replacement tag of the desired type
for(let i=0;i<l;++i){var nodeName=original.attributes.item(i).nodeName,nodeValue=original.attributes.item(i).nodeValue;replacement.setAttribute(nodeName,nodeValue)}// Persist contents
let tpl=document.createElement("template");tpl.content.append(original.content);replacement.appendChild(tpl);// Switch!
original.parentNode.replaceChild(replacement,original);element=replacement}}for(let i=0;i<element.attributes.length;i++){// collect data receiver
if(element.attributes[i].name.startsWith("\u0192-.")||element.attributes[i].name.startsWith("\u0192-$")){if("$"===element.attributes[i].name[2]){console.warn("\u0192-$ is deprecated, use \u0192-. to set properties instead",this)}// split multiple wires
element.attributes[i].value.split(",").map(w=>{let r=this.__resolveWireAndPath(w);// create empty if not exist
if(!wirebundle[r.receivingWire]){wirebundle[r.receivingWire]=[]}wirebundle[r.receivingWire].push({element:element,property:this.__toCamelCase(element.attributes[i].name.substr(3)),path:r.path})});continue}// collect receiving tags
if(element.attributes[i].name.startsWith("\u0192-")){// collect receiver
element.attributes[i].value.split(",").map(w=>{let r=this.__resolveWireAndPath(w);// create empty if not exist
if(!wirebundle[r.receivingWire]){wirebundle[r.receivingWire]=[]}wirebundle[r.receivingWire].push({element:element,method:this.__toCamelCase(element.attributes[i].name.substr(2)),attrName:element.attributes[i].name.substr(2),path:r.path})});continue}// collect sending tags
if(element.attributes[i].name.startsWith("@-")){let eventname=element.attributes[i].name.substr(2),wire,fwires=element.attributes[i].value;fwires.split(",").map(fwire=>{let trimmedWire=fwire.trim(),type="call";if(trimmedWire.startsWith("((")){wire=trimmedWire.substring(2,trimmedWire.length-2);type="setValue"}else if(trimmedWire.startsWith("-^")){wire=trimmedWire.substring(2);type="fireOnHost"}else if(trimmedWire.startsWith("^")){wire=trimmedWire.substring(1);type="fire";if(trimmedWire.startsWith("^^")){wire=trimmedWire.substring(2);type="fireBubble"}}else if(":STOP"==trimmedWire){type="stop";wire="stop"}else{wire=trimmedWire;type="call"}registerEvent(eventname,type,wire,element)});continue}}}/**
         * register event on current element
         * @param eventname
         * @param type
         * @param wire
         */function registerEvent(eventname,type,wire,element){// find properties in wire
element.__atf={};let match=wire.match(/([a-z0-9\-_*\.]+)/gi);// store @-ƒ-attributes existence
for(let i=0;i<element.attributes.length;i++){element.__atf[element.attributes[i].name]=!0}let handler={// prevent default and stop propagation
stop:function(e){e.preventDefault();e.stopPropagation()},call:function(e){/**
             * Prüfe ob die Funktion mit einem Wert aus dem Host oder mit den Details des Events ausgeführt werden soll.
             * --wire(hostName) ==> wirft this.hostName in die Funktion sonst wird e.detail verwendet
             *
             */let effectiveWire=wire,detailData=e.detail;if(null!==match&&1<match.length){// --wireName(*) sends the raw event
// --wireName(*.mouseX) sends property mouseX of the event
if(match[1].startsWith("*")){if(1===match[1].length){// send raw event
detailData=e}else{// send event subprop with *.notDetail.xxx
detailData=self._pathGet(e,match[1].substr(2,match[1].length))}}else{// send host property
detailData=self._pathGet(self,match[1])}effectiveWire=match[0]}self._FBPTriggerWire(effectiveWire,detailData)},fire:function(e){if(null!==match&&1<match.length){let prop=match[1],theEvent=match[0],customEvent=new Event(theEvent,{composed:!1,bubbles:!0});// send details with *.sub or *
if(prop.startsWith("*")){if(1==prop.length){customEvent.detail=e}else{customEvent.detail=self._pathGet(e,prop.substr(2))}}else{customEvent.detail=self._pathGet(self,prop)}e.currentTarget.dispatchEvent(customEvent)}else{let customEvent=new Event(wire,{composed:!1,bubbles:!0});customEvent.detail=e.detail;e.currentTarget.dispatchEvent(customEvent)}},fireOnHost:function(e){if(null!==match&&1<match.length){let prop=match[1],theEvent=match[0],customEvent=new Event(theEvent,{composed:!1,bubbles:!0});// send details with *.sub or *
if(prop.startsWith("*")){if(1==prop.length){customEvent.detail=e}else{customEvent.detail=self._pathGet(e,prop.substr(2))}}else{customEvent.detail=self._pathGet(self,prop)}self.dispatchEvent(customEvent)}else{let customEvent=new Event(wire,{composed:!1,bubbles:!0});customEvent.detail=e.detail;self.dispatchEvent(customEvent)}},fireBubble:function(e){if(null!==match&&1<match.length){let prop=match[1],theEvent=match[0],customEvent=new Event(theEvent,{composed:!0,bubbles:!0});// send details with *.sub or *
if(prop.startsWith("*")){if(1==prop.length){customEvent.detail=e}else{customEvent.detail=self._pathGet(e,prop.substr(2))}}else{customEvent.detail=self._pathGet(self,prop)}e.currentTarget.dispatchEvent(customEvent)}else{let customEvent=new Event(wire,{composed:!0,bubbles:!0});customEvent.detail=e.detail;e.currentTarget.dispatchEvent(customEvent)}},setValue:function(e){self._pathSet(self,wire,e.detail);//self.set(wire, e.detail, self);
}};element.addEventListener(eventname,handler[type]);self.__FBPEventlistener.push({element:element,event:eventname,handler:handler[type]})}// queueing for _FBPTriggerWire
if(!this.__fbp_ready){this._FBPReady();let l=this.__wireQueue.length;for(let i=0,t;i<l;i++){t=this.__wireQueue.shift();this._FBPTriggerWire(t.w,t.d)}}}/**
       * Livecycle method
       * This method is called, when the wires are ready
       */_FBPReady(){this.__fbp_ready=!0}__enqueueTrigger(wire,detailData){this.__wireQueue.push({w:wire,d:detailData})}__resolveWireAndPath(w){// finde --wire(*.xx.yy)  => group1 = --wire  group2 = xx.yy
let match=w.trim().match(/(^[^\(]*)\(?\*?\.?([^\)]*)/),receivingWire=match[1],path=match[2];return{receivingWire,path}}disconnectedCallback(){// clear wires first
this.__wirebundle={};this.__wireQueue=[];/* remove event listeners*/this.__FBPEventlistener.forEach(function(e){e.element.removeEventListener(e.event,e.handler)});if(super.disconnectedCallback){super.disconnectedCallback()}}/**
       * Reads a value from a path.  If any sub-property in the path is `undefined`,
       * this method returns `undefined` (will never throw.
       *
       * @param {Object} root Object from which to dereference path from
       * @param {string | !Array<string|number>} path Path to read
       * @return {*} Value at path, or `undefined` if the path could not be
       *  fully dereferenced.
       */_pathGet(root,path){let prop=root,parts=this._split(path);// Loop over path parts[0..n-1] and dereference
for(let i=0;i<parts.length;i++){if(!prop){return}let part=parts[i];prop=prop[part]}return prop}/**
       * Sets a value to a path.  If any sub-property in the path is `undefined`,
       * this method will no-op.
       *
       * @param {Object} root Object from which to dereference path from
       * @param {string | !Array<string|number>} path Path to set
       * @param {*} value Value to set to path
       * @return {string | undefined} The normalized version of the input path
       */_pathSet(root,path,value){let prop=root,parts=this._split(path),last=parts[parts.length-1];// used for @-event="((prop.sub))"
if(1<parts.length){// Loop over path parts[0..n-2] and dereference
for(let i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}// Set value to object at end of path
prop[last]=value}else{// Simple property set
prop[path]=value}return parts.join(".")}/**
       * Splits a path into an array of property names. Accepts either arrays
       * of path parts or strings.
       *
       * Example:
       *
       * ```
       * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
       * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
       * ```
       *
       * @param {string | !Array<string|number>} path Input path
       * @return {!Array<string>} Array of path parts
       * @suppress {checkTypes}
       */_split(path){return path.toString().split(".")}}};_exports.FBP=FBP;var fbp={FBP:FBP};_exports.$fbp=fbp;class FooterBar extends FBP(LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
            background-color: var(--surface, white);
            color: var(--on-surface, black);
            height: 120px;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
      
    `}}window.customElements.define("footer-bar",FooterBar);class FuroVerticalFlex extends LitElement{/**
   *
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`        
        :host {
            display: block;
            height: 100%;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: column;
            -webkit-flex-direction: column;
            flex-direction: column;
        }

        :host([hidden]) {
            display: none;
        }

        :host([reverse]) {
            -ms-flex-direction: column-reverse;
            -webkit-flex-direction: column-reverse;
            flex-direction: column-reverse;
        }
        
        ::slotted(*[flex]) {
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`        
      <slot></slot>
    `}}window.customElements.define("furo-vertical-flex",FuroVerticalFlex);class FuroHorizontalFlex extends LitElement{/**
   *
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        
        :host {
            width: 100%;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
        }

        :host([reverse]) {
            -ms-flex-direction: row-reverse;
            -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse;
        }

        ::slotted(*[flex]) {
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
        }
        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`        
            <slot></slot>
        `}}window.customElements.define("furo-horizontal-flex",FuroHorizontalFlex);class FuroVerticalScroller extends FBP(LitElement){/**
   *
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
          :host {
              display: block;
              height: 100%;
              overflow-y: auto;
          }
  
          :host([hidden]) {
              display: none;
          }

          /** the background of the bar itself. **/
          ::-webkit-scrollbar {
              width: 8px;
              background-color: var(--surface, white);
          }

          /** the directional buttons on the scrollbar. **/
          ::-webkit-scrollbar-button {
              background-color: var(--on-surface, black);
          }

          /** the empty space “below” the progress bar. **/
          ::-webkit-scrollbar-track {
          }

          /** the top-most layer of the the progress bar not covered by the thumb. **/
          ::-webkit-scrollbar-track-piece {
          }

          /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
          ::-webkit-scrollbar-thumb {
              background-color: var(--on-surface, black);
              border-radius: 10px;
          }

          /** the bottom corner of the scrollable element, where two scrollbar meet. **/
          ::-webkit-scrollbar-corner {
          }

          /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
          ::-webkit-resizer {
          }
      `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`<slot></slot>`}}window.customElements.define("furo-vertical-scroller",FuroVerticalScroller);class FuroSplitView extends FBP(LitElement){static get properties(){return{/**
       * flip the left and right side
       */reverse:{type:Boolean}}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
            height: inherit;
        }
        :host([hidden]) {
            display: none;
        }
        .master {
            height: inherit;
            width: var(--split-master-width, 270px);
            min-width: var(--split-master-width, 270px);
            
        }

        .detail {
            height: 100%;
            position: relative;
        }

        furo-horizontal-flex {
            height: 100%;
        }
        ::slotted([scroll]){
            height: 100%;
            overflow-y: auto;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`             
      <furo-horizontal-flex ?reverse="${this.reverse}">
        <div class="master">
          <slot name="master"></slot>
        </div>
        <div flex class="detail">
          <slot></slot>
        </div> 
      </furo-horizontal-flex>     
    `}}window.customElements.define("furo-split-view",FuroSplitView);class FuroEmptySpacer extends LitElement{constructor(){super();this.flex=!0;this.hidden=!1}static get properties(){return{/**
       * Attribute flex for furo-horizontal-flex and furo-vertical-flex
       */flex:{type:Boolean,reflect:!0},/**
       * Set to true to hide the spacer
       */hidden:{type:Boolean,reflect:!0}}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {*}
     */render(){// language=HTML
return html``}}window.customElements.define("furo-empty-spacer",FuroEmptySpacer);class FuroLoadingIndicatorBar extends FBP(LitElement){constructor(){super();this.setAttribute("hidden","")}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
            width: 100%;
            height: 4px;
            pointer-events: none;
            opacity: 0.8;
            background-color: var(--secondary-color);
            animation: colorchange 5s infinite;
            @apply --loading-indicator-mixin;
        }

        :host([hidden]) {
            display: none;
        }

        @keyframes colorchange {
            0% {
                background: red;
            }
            25% {
                background: yellow;
            }
            50% {
                background: blue;
            }
            75% {
                background: green;
            }
            100% {
                background: red;
            }
        }
    `}start(){this.removeAttribute("hidden")}stop(){this.setAttribute("hidden","")}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
      <slot></slot>
    `}}window.customElements.define("furo-loading-indicator-bar",FuroLoadingIndicatorBar);class FuroCard extends FBP(LitElement){/**
   *
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);

            background: var(--furo-card-background, white);
            padding: var(--furo-card-padding, 12px);
            margin: var(--furo-card-margin, 0);
            box-sizing: border-box;
            height: var(--furo-card-height, unset);
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }
        .action{
            position: absolute;
            bottom: 0;
            left: 0;
            right:0;
            border-top: 1px solid var(--separator);
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
      <slot></slot>
      <div class="action">
        <slot name="action"></slot>
      </div>
    `}}window.customElements.define("furo-card",FuroCard);/**
                                                      * Todo Describe and explain env
                                                      *
                                                      */class Env{}// default Env
_exports.Env$1=_exports.Env=Env;Env._acceptLanguage=window.navigator.languages.map((e,i)=>{if(0===i){e=e.substr(0,2)};return e+";q="+Math.max(.1,1-(i+1)/10)});Env._acceptLanguage.unshift(window.navigator.language);Env.api={headers:[["Accept-Language",Env._acceptLanguage.join(",")]],services:{},specs:{}};Env.locale=window.navigator.language;var environment={Env:Env};_exports.$environment=environment;class i18n{static registerResBundle(bundle){this.resbundle=bundle}static t(key){if(i18n.resbundle===void 0){console.warn("There is no resouce bundle registered. Please register with i18.registerResBundle(RESBUNDLE).");return key}let b=i18n.resbundle[Env.locale];if(b===void 0){console.warn("No resource bundle with locale "+Env.locale+" exists.");return key+"**"}const res=key.split(".").reduce((acc,part)=>acc&&acc[part],b);return res?res:key+"**"}static n(key,num){return key+"*"+num}}_exports.i18n$1=_exports.i18n=i18n;var i18n$1={i18n:i18n};_exports.$i18n=i18n$1;class Init{static registerEnv(section,data){Env[section]=data}static registerApiServices(services){Env.api.services=services}static registerApiTypes(types){Env.api.specs=types}}/**
   * Todo Describe and explain SYS
   *
   */_exports.Init$1=_exports.Init=Init;class Sys{static setLocale(locale){//todo: checks
console.log("Set locale from",Env.locale);Env.locale=locale;console.log("to",Env.locale)}}_exports.Sys$1=_exports.Sys=Sys;var system={Init:Init,Sys:Sys};/**
    * `Iconset` class , works together with `furo-icon`
    *
    * to use furo-icon you should
    * first import a svg set of icons and register it to Iconset
    *
    * the set of icons can be defined in a iconSetName.js file which has content like this:
    *     export const iconSetName = {
    *          "iconName":"<g><path d='M12 xx.... z'></path></g>",
    *          "left-arrow":"<g><path d='M12 xx.... z'></path></g>"
    *          ...
    *     };
    * then import the iconset and register it
    * import {iconSetName} from "./iconSetName";
    * import {Iconset} from "@furo/framework/furo.js";
    * Iconset.registerIconset( "iconSetName", iconSetName);
    *
    * after registering you can use those icons in furo-icon in any other component
    * <furo-icon icon="iconSetName:iconName" ></furo-icon>
    *
    * if you has default iconset imported, you can use icon without set name:
    * <furo-icon icon="iconName" ></furo-icon>
    *
    */_exports.$system=system;class Iconset{// register an icon set
static registerIconset(setName,icons){this[setName]=icons}// get icon svg via icon set name and icon name
static get(setName,iconName){// default fallback icon `report problem`
let icon="<g></g>";if(this[setName]&&this[setName][iconName]){icon=this[setName][iconName]}return icon}}_exports.Iconset$1=_exports.Iconset=Iconset;var iconset$1={Iconset:Iconset};_exports.$iconset$1=iconset$1;var furo={Env:Env,i18n:i18n,Init:Init,Sys:Sys,Theme:Theme,Iconset:Iconset};/**
    * Furo Base Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons
    *
    */_exports.$furo=furo;const FuroBaseIcons={"3d-rotation":"<g><path d=\"M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z\"></path></g>",accessibility:"<g><path d=\"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z\"></path></g>",accessible:"<g><circle cx=\"12\" cy=\"4\" r=\"2\"></circle><path d=\"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z\"></path></g>","account-balance":"<g><path d=\"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z\"></path></g>","account-balance-wallet":"<g><path d=\"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>","account-box":"<g><path d=\"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z\"></path></g>","account-circle":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"></path></g>",add:"<g><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g>","add-alert":"<g><path d=\"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z\"></path></g>","add-box":"<g><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g>","add-circle":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g>","add-circle-outline":"<g><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>","add-shopping-cart":"<g><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"></path></g>",alarm:"<g><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>","alarm-add":"<g><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"></path></g>","alarm-off":"<g><path d=\"M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z\"></path></g>","alarm-on":"<g><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z\"></path></g>","all-out":"<g><path d=\"M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z\"></path></g>",android:"<g><path d=\"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z\"></path></g>",announcement:"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z\"></path></g>",apps:"<g><path d=\"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z\"></path></g>",archive:"<g><path d=\"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\"></path></g>","arrow-back":"<g><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></g>","arrow-downward":"<g><path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"></path></g>","arrow-drop-down":"<g><path d=\"M7 10l5 5 5-5z\"></path></g>","arrow-drop-down-circle":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z\"></path></g>","arrow-drop-up":"<g><path d=\"M7 14l5-5 5 5z\"></path></g>","arrow-forward":"<g><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"></path></g>","arrow-upward":"<g><path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"></path></g>","aspect-ratio":"<g><path d=\"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g>",assessment:"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"></path></g>",assignment:"<g><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"></path></g>","assignment-ind":"<g><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z\"></path></g>","assignment-late":"<g><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g>","assignment-return":"<g><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z\"></path></g>","assignment-returned":"<g><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z\"></path></g>","assignment-turned-in":"<g><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g>",attachment:"<g><path d=\"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z\"></path></g>",autorenew:"<g><path d=\"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z\"></path></g>",backspace:"<g><path d=\"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z\"></path></g>",backup:"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g>",block:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z\"></path></g>",book:"<g><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g>",bookmark:"<g><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g>","bookmark-border":"<g><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g>","bug-report":"<g><path d=\"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z\"></path></g>",build:"<g><path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"></path></g>",cached:"<g><path d=\"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z\"></path></g>","camera-enhance":"<g><path d=\"M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z\"></path></g>",cancel:"<g><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"></path></g>","card-giftcard":"<g><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g>","card-membership":"<g><path d=\"M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z\"></path></g>","card-travel":"<g><path d=\"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z\"></path></g>","change-history":"<g><path d=\"M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z\"></path></g>",check:"<g><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"></path></g>","check-box":"<g><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g>","check-box-outline-blank":"<g><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g>","check-circle":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g>","chevron-left":"<g><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></g>","chevron-right":"<g><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></g>","chrome-reader-mode":"<g><path d=\"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z\"></path></g>",class:"<g><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g>",clear:"<g><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g>",close:"<g><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g>",cloud:"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z\"></path></g>","cloud-circle":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z\"></path></g>","cloud-done":"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z\"></path></g>","cloud-download":"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z\"></path></g>","cloud-off":"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z\"></path></g>","cloud-queue":"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z\"></path></g>","cloud-upload":"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g>",code:"<g><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path></g>","compare-arrows":"<g><path d=\"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z\"></path></g>","content-copy":"<g><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"></path></g>","content-cut":"<g><path d=\"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z\"></path></g>","content-paste":"<g><path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path></g>",copyright:"<g><path d=\"M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>",create:"<g><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></g>","create-new-folder":"<g><path d=\"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z\"></path></g>","credit-card":"<g><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g>",dashboard:"<g><path d=\"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z\"></path></g>","date-range":"<g><path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"></path></g>",delete:"<g><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path></g>","delete-forever":"<g><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\"></path></g>","delete-sweep":"<g><path d=\"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z\"></path></g>",description:"<g><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z\"></path></g>",dns:"<g><path d=\"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>",done:"<g><path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"></path></g>","done-all":"<g><path d=\"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z\"></path></g>","donut-large":"<g><path d=\"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z\"></path></g>","donut-small":"<g><path d=\"M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z\"></path></g>",drafts:"<g><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"></path></g>",eject:"<g><path d=\"M5 17h14v2H5zm7-12L5.33 15h13.34z\"></path></g>",error:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g>","error-outline":"<g><path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>","euro-symbol":"<g><path d=\"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z\"></path></g>",event:"<g><path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\"></path></g>","event-seat":"<g><path d=\"M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z\"></path></g>","exit-to-app":"<g><path d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g>","expand-less":"<g><path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"></path></g>","expand-more":"<g><path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"></path></g>",explore:"<g><path d=\"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z\"></path></g>",extension:"<g><path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"></path></g>",face:"<g><path d=\"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z\"></path></g>",favorite:"<g><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"></path></g>","favorite-border":"<g><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"></path></g>",feedback:"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z\"></path></g>","file-download":"<g><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g>","file-upload":"<g><path d=\"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z\"></path></g>","filter-list":"<g><path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"></path></g>","find-in-page":"<g><path d=\"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z\"></path></g>","find-replace":"<g><path d=\"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z\"></path></g>",fingerprint:"<g><path d=\"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z\"></path></g>","first-page":"<g><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"></path></g>",flag:"<g><path d=\"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z\"></path></g>","flight-land":"<g><path d=\"M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z\"></path></g>","flight-takeoff":"<g><path d=\"M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z\"></path></g>","flip-to-back":"<g><path d=\"M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z\"></path></g>","flip-to-front":"<g><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z\"></path></g>",folder:"<g><path d=\"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z\"></path></g>","folder-open":"<g><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\"></path></g>","folder-shared":"<g><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z\"></path></g>","font-download":"<g><path d=\"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z\"></path></g>",forward:"<g><path d=\"M12 8V4l8 8-8 8v-4H4V8z\"></path></g>",fullscreen:"<g><path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"></path></g>","fullscreen-exit":"<g><path d=\"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z\"></path></g>","g-translate":"<g><path d=\"M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z\"></path></g>",gavel:"<g><path d=\"M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z\"></path></g>",gesture:"<g><path d=\"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z\"></path></g>","get-app":"<g><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g>",gif:"<g><path d=\"M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z\"></path></g>",grade:"<g><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g>","group-work":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g>",help:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"></path></g>","help-outline":"<g><path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\"></path></g>","highlight-off":"<g><path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>",history:"<g><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g>",home:"<g><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"></path></g>","hourglass-empty":"<g><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z\"></path></g>","hourglass-full":"<g><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z\"></path></g>",http:"<g><path d=\"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z\"></path></g>",https:"<g><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g>","important-devices":"<g><path d=\"M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z\"></path></g>",inbox:"<g><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"></path></g>","indeterminate-check-box":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z\"></path></g>",info:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"></path></g>","info-outline":"<g><path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"></path></g>",input:"<g><path d=\"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z\"></path></g>","invert-colors":"<g><path d=\"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z\"></path></g>",label:"<g><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z\"></path></g>","label-outline":"<g><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z\"></path></g>",language:"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z\"></path></g>","last-page":"<g><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"></path></g>",launch:"<g><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g>","lightbulb-outline":"<g><path d=\"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z\"></path></g>","line-style":"<g><path d=\"M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z\"></path></g>","line-weight":"<g><path d=\"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z\"></path></g>",link:"<g><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></g>",list:"<g><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z\"></path></g>",lock:"<g><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g>","lock-open":"<g><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z\"></path></g>","lock-outline":"<g><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z\"></path></g>","low-priority":"<g><path d=\"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z\"></path></g>",loyalty:"<g><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z\"></path></g>",mail:"<g><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g>",markunread:"<g><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g>","markunread-mailbox":"<g><path d=\"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"></path></g>",menu:"<g><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g>","more-horiz":"<g><path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>","more-vert":"<g><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>",motorcycle:"<g><path d=\"M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"></path></g>","move-to-inbox":"<g><path d=\"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z\"></path></g>","next-week":"<g><path d=\"M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z\"></path></g>","note-add":"<g><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z\"></path></g>","offline-pin":"<g><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z\"></path></g>",opacity:"<g><path d=\"M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z\"></path></g>","open-in-browser":"<g><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z\"></path></g>","open-in-new":"<g><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g>","open-with":"<g><path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path></g>",pageview:"<g><path d=\"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z\"></path></g>","pan-tool":"<g><path d=\"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"></path></g>",payment:"<g><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g>","perm-camera-mic":"<g><path d=\"M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z\"></path></g>","perm-contact-calendar":"<g><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z\"></path></g>","perm-data-setting":"<g><path d=\"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>","perm-device-information":"<g><path d=\"M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g>","perm-identity":"<g><path d=\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\"></path></g>","perm-media":"<g><path d=\"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z\"></path></g>","perm-phone-msg":"<g><path d=\"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z\"></path></g>","perm-scan-wifi":"<g><path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"></path></g>",pets:"<g><circle cx=\"4.5\" cy=\"9.5\" r=\"2.5\"></circle><circle cx=\"9\" cy=\"5.5\" r=\"2.5\"></circle><circle cx=\"15\" cy=\"5.5\" r=\"2.5\"></circle><circle cx=\"19.5\" cy=\"9.5\" r=\"2.5\"></circle><path d=\"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z\"></path></g>","picture-in-picture":"<g><path d=\"M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z\"></path></g>","picture-in-picture-alt":"<g><path d=\"M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z\"></path></g>","play-for-work":"<g><path d=\"M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z\"></path></g>",polymer:"<g><path d=\"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z\"></path></g>","power-settings-new":"<g><path d=\"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z\"></path></g>","pregnant-woman":"<g><path d=\"M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z\"></path></g>",print:"<g><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g>","query-builder":"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g>","question-answer":"<g><path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"></path></g>","radio-button-checked":"<g><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>","radio-button-unchecked":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>",receipt:"<g><path d=\"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z\"></path></g>","record-voice-over":"<g><circle cx=\"9\" cy=\"9\" r=\"4\"></circle><path d=\"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z\"></path></g>",redeem:"<g><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g>",redo:"<g><path d=\"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z\"></path></g>",refresh:"<g><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></g>",remove:"<g><path d=\"M19 13H5v-2h14v2z\"></path></g>","remove-circle":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z\"></path></g>","remove-circle-outline":"<g><path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>","remove-shopping-cart":"<g><path d=\"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z\"></path></g>",reorder:"<g><path d=\"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z\"></path></g>",reply:"<g><path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g>","reply-all":"<g><path d=\"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g>",report:"<g><path d=\"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z\"></path></g>","report-problem":"<g><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g>",restore:"<g><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g>","restore-page":"<g><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z\"></path></g>",room:"<g><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g>","rounded-corner":"<g><path d=\"M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z\"></path></g>",rowing:"<g><path d=\"M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z\"></path></g>",save:"<g><path d=\"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"></path></g>",schedule:"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g>",search:"<g><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path></g>","select-all":"<g><path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z\"></path></g>",send:"<g><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"></path></g>",settings:"<g><path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"></path></g>","settings-applications":"<g><path d=\"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z\"></path></g>","settings-backup-restore":"<g><path d=\"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z\"></path></g>","settings-bluetooth":"<g><path d=\"M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z\"></path></g>","settings-brightness":"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z\"></path></g>","settings-cell":"<g><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z\"></path></g>","settings-ethernet":"<g><path d=\"M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z\"></path></g>","settings-input-antenna":"<g><path d=\"M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z\"></path></g>","settings-input-component":"<g><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g>","settings-input-composite":"<g><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g>","settings-input-hdmi":"<g><path d=\"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z\"></path></g>","settings-input-svideo":"<g><path d=\"M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path></g>","settings-overscan":"<g><path d=\"M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g>","settings-phone":"<g><path d=\"M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z\"></path></g>","settings-power":"<g><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z\"></path></g>","settings-remote":"<g><path d=\"M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z\"></path></g>","settings-voice":"<g><path d=\"M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z\"></path></g>",shop:"<g><path d=\"M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z\"></path></g>","shop-two":"<g><path d=\"M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z\"></path></g>","shopping-basket":"<g><path d=\"M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>","shopping-cart":"<g><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g>",sort:"<g><path d=\"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z\"></path></g>","speaker-notes":"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z\"></path></g>","speaker-notes-off":"<g><path d=\"M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z\"></path></g>",spellcheck:"<g><path d=\"M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z\"></path></g>",star:"<g><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g>","star-border":"<g><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g>","star-half":"<g><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g>",stars:"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"></path></g>",store:"<g><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g>","subdirectory-arrow-left":"<g><path d=\"M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z\"></path></g>","subdirectory-arrow-right":"<g><path d=\"M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z\"></path></g>",subject:"<g><path d=\"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z\"></path></g>","supervisor-account":"<g><path d=\"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z\"></path></g>","swap-horiz":"<g><path d=\"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z\"></path></g>","swap-vert":"<g><path d=\"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z\"></path></g>","swap-vertical-circle":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z\"></path></g>","system-update-alt":"<g><path d=\"M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z\"></path></g>",tab:"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z\"></path></g>","tab-unselected":"<g><path d=\"M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z\"></path></g>","text-format":"<g><path d=\"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z\"></path></g>",theaters:"<g><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g>","thumb-down":"<g><path d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path></g>","thumb-up":"<g><path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"></path></g>","thumbs-up-down":"<g><path d=\"M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z\"></path></g>",timeline:"<g><path d=\"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z\"></path></g>",toc:"<g><path d=\"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z\"></path></g>",today:"<g><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></g>",toll:"<g><path d=\"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z\"></path></g>","touch-app":"<g><path d=\"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z\"></path></g>","track-changes":"<g><path d=\"M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z\"></path></g>",translate:"<g><path d=\"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z\"></path></g>","trending-down":"<g><path d=\"M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z\"></path></g>","trending-flat":"<g><path d=\"M22 12l-4-4v3H3v2h15v3z\"></path></g>","trending-up":"<g><path d=\"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z\"></path></g>","turned-in":"<g><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g>","turned-in-not":"<g><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g>",unarchive:"<g><path d=\"M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z\"></path></g>",undo:"<g><path d=\"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z\"></path></g>","unfold-less":"<g><path d=\"M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z\"></path></g>","unfold-more":"<g><path d=\"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z\"></path></g>",update:"<g><path d=\"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z\"></path></g>","verified-user":"<g><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g>","view-agenda":"<g><path d=\"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z\"></path></g>","view-array":"<g><path d=\"M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z\"></path></g>","view-carousel":"<g><path d=\"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z\"></path></g>","view-column":"<g><path d=\"M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z\"></path></g>","view-day":"<g><path d=\"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z\"></path></g>","view-headline":"<g><path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\"></path></g>","view-list":"<g><path d=\"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z\"></path></g>","view-module":"<g><path d=\"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z\"></path></g>","view-quilt":"<g><path d=\"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z\"></path></g>","view-stream":"<g><path d=\"M4 18h17v-6H4v6zM4 5v6h17V5H4z\"></path></g>","view-week":"<g><path d=\"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z\"></path></g>",visibility:"<g><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g>","visibility-off":"<g><path d=\"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z\"></path></g>",warning:"<g><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g>","watch-later":"<g><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z\"></path></g>",weekend:"<g><path d=\"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z\"></path></g>",work:"<g><path d=\"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z\"></path></g>","youtube-searched-for":"<g><path d=\"M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z\"></path></g>","zoom-in":"<g><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z\"></path></g>","zoom-out":"<g><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z\"></path></g>"};_exports.FuroBaseIcons=FuroBaseIcons;var baseIcons={FuroBaseIcons:FuroBaseIcons};_exports.$baseIcons=baseIcons;if(!Iconset.default){Iconset.registerIconset("default",FuroBaseIcons)}/**
   * `furo-icon`
   *
   * to use furo icon you should
   * first import a svg set of icons and register it to @furo/framework/iconset
   *
   *
   *
   *```js
   * the set of icons can be defined in a iconSetName.js file which has content like this:
   *     export const iconSetName = {
   *          "iconName":"<g><path d='M12 xx.... z'></path></g>",
   *          "left-arrow":"<g><path d='M12 xx.... z'></path></g>"
   *          ...
   *     };
   * then import the iconset and register it
   * import {iconSetName} from "./iconSetName";
   * import {Iconset} from "@furo/framework/furo.js";
   * Iconset.registerIconset( "iconSetName", iconSetName);
   *```
   *
   * You can find some set in ./iconsets/...
   *
   * after registering you can use those icons in furo-icon in any other component
   *
   * ```html
   * <furo-icon icon="iconSetName:iconName"></furo-icon>
   * ```
   *
   * if you have imported an iconset with the name **default**, you can use the icon without set name:
   *
   * ```html
   * <furo-icon icon="iconName" ></furo-icon>
   *```
   *
   * use css variable '--furo-icon-width' and '--furo-icon-height' to define the size
   * use '--furo-icon-fill-color' and '--furo-icon-stroke-color'  to define the fill and stroke colors
   *
   * you can also define other properties lik viewport ,preserveAspectRatio...
   * @summary furo icon
   * @customElement
   * @demo demo-furo-icon
   * @demo demo-furo-icon-list
   */class FuroIcon extends LitElement{constructor(){super();this.viewBox="0 0 24 24";this.preserveAspectRatio="xMidYMid meet";this.focusable="false";this.svgstyle="pointer-events: none; display: block; width: 100%; height: 100%;"}/**
     * @private
     * @returns {CSSResult}
     *
     */static get styles(){// language=CSS
return css`
            :host {
                display: inline-block;
                vertical-align: middle;
                fill: var(--furo-icon-fill-color, currentcolor);
                stroke: var(--furo-icon-stroke-color, none);
                width: var(--furo-icon-width, 24px);
                height: var(--furo-icon-height, 24px);
                vertical-align: center;
                position: relative;
                justify-content: center;
            }

            :host([hidden]) {
                display: none;
            }
        `}/**
     *@private
     */static get properties(){return{icon:{type:String},viewBox:{type:String,attribute:"view-box"},focusable:{type:Boolean},preserveAspectRatio:{type:String,attribute:"preserve-aspect-ratio"},style:{type:String}}}/**
     * @private
     * @param changedProperties
     */updated(changedProperties){if(this.icon!==void 0){let w=this.icon.split(":");// set iconset to default when no iconset name is given
if(w[1]===void 0){w[1]=w[0];w[0]="default"}this.shadowRoot.getElementById("furo-icon-svg").innerHTML=Iconset.get(w[0],w[1])}}/**
     * @private
     * @returns {TemplateResult}
     */render(){return html`<svg id="furo-icon-svg" viewBox=${this.viewBox} preserveAspectRatio=${this.preserveAspectRatio} focusable=${this.focusable} style=${this.svgstyle}></svg>`}}customElements.define("furo-icon",FuroIcon);class FuroRipple extends LitElement{constructor(){super();this.noink=!1}connectedCallback(){this.parentNode.addEventListener("click",e=>{if(!this.noink){this.trigger()}})}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
            :host {
                pointer-events: none;
                position: absolute;
                overflow: hidden;
                transform: translate3d(0, 0, 0);
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                display: block;
            }

            :host:after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                background-image: radial-gradient(circle, var(--furo-ripple-bg-color, #000) 10%, transparent 10.01%);
                background-repeat: no-repeat;
                background-position: 50%;
                transform: scale(10, 10);
                opacity: 0;
                transition: transform .5s, opacity 1s;
            }

            :host([_active]):after {
                transform: scale(0, 0);
                opacity: .2;
                transition: 0s;
            }

        `}/**
     *@private
     */static get properties(){return{/**
       * Disables the click, only ripples with `trigger()`
       */noink:{type:Boolean,reflect:!0}}}/**
     * animate the ripple effect
     */trigger(){this.setAttribute("_active","");setTimeout(()=>{this.removeAttribute("_active")},50)}}customElements.define("furo-ripple",FuroRipple);class HeaderToolbar extends FBP(LitElement){constructor(){super();this.selected="home"}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPAddWireHook("--pathChanged",e=>{if(e.pathSegments[0]){this.selected=e.pathSegments[0]}})}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */selected:{type:String,reflect:!0}}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
            background-color: var(--primary);
            color: var(--on-primary);
            line-height: 54px;
            font-size: 18px;
            padding-left: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

        a:visited {
            color: unset;
        }

        a {
            padding: 0 var(--spacing-s);
            text-decoration: none;
            color: unset;
            border-bottom: 2px solid var(--primary);
        }

        :host([selected="home"]) a[name="home"],
        :host([selected="api"]) a[name="api"],
        :host([selected="guide"]) a[name="guide"]
        {
            border-bottom: 2px solid var(--accent);
        }
       

        a:hover {
            color: var(--on-primary-variant);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
      <furo-horizontal-flex>
        <a name="home" href="/home">フロー Furo BaseComponents</a>
        <furo-empty-spacer></furo-empty-spacer>
        <a name="guide" href="/guide/md/overview/">Guide</a>
        <a name="api" href="/api/input/doc/">API</a>
        <a href="https://github.com/veith/FuroBaseComponents">
          <furo-icon icon="furo:github"></furo-icon>
        </a>
      </furo-horizontal-flex>
      <furo-location @-location-changed="--pathChanged"></furo-location>
    `}}window.customElements.define("header-toolbar",HeaderToolbar);/**
                                                                * Maps Icons
                                                                * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
                                                                *
                                                                * The set correspondents with the set of @polymer/iron-icons/maps-icons
                                                                *
                                                                */const MapsIcons={"add-location":"<g><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z\"></path></g>",beenhere:"<g><path d=\"M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z\"></path></g>",directions:"<g><path d=\"M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z\"></path></g>","directions-bike":"<g><path d=\"M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z\"></path></g>","directions-boat":"<g><path d=\"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z\"></path></g>","directions-bus":"<g><path d=\"M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z\"></path></g>","directions-car":"<g><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"></path></g>","directions-railway":"<g><path d=\"M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z\"></path></g>","directions-run":"<g><path d=\"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z\"></path></g>","directions-subway":"<g><path d=\"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z\"></path></g>","directions-transit":"<g><path d=\"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z\"></path></g>","directions-walk":"<g><path d=\"M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7\"></path></g>","edit-location":"<g><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z\"></path></g>","ev-station":"<g><path d=\"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z\"></path></g>",flight:"<g><path d=\"M10.18 9\"></path><path d=\"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z\"></path></g>",hotel:"<g><path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z\"></path></g>",layers:"<g><path d=\"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z\"></path></g>","layers-clear":"<g><path d=\"M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z\"></path></g>","local-activity":"<g><path d=\"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z\"></path></g>","local-airport":"<g><path d=\"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z\"></path></g>","local-atm":"<g><path d=\"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z\"></path></g>","local-bar":"<g><path d=\"M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z\"></path></g>","local-cafe":"<g><path d=\"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z\"></path></g>","local-car-wash":"<g><path d=\"M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z\"></path></g>","local-convenience-store":"<g><path d=\"M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z\"></path></g>","local-dining":"<g><path d=\"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z\"></path></g>","local-drink":"<g><path d=\"M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z\"></path></g>","local-florist":"<g><path d=\"M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z\"></path></g>","local-gas-station":"<g><path d=\"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g>","local-grocery-store":"<g><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g>","local-hospital":"<g><path d=\"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z\"></path></g>","local-hotel":"<g><path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z\"></path></g>","local-laundry-service":"<g><path d=\"M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z\"></path></g>","local-library":"<g><path d=\"M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z\"></path></g>","local-mall":"<g><path d=\"M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z\"></path></g>","local-movies":"<g><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g>","local-offer":"<g><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z\"></path></g>","local-parking":"<g><path d=\"M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z\"></path></g>","local-pharmacy":"<g><path d=\"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z\"></path></g>","local-phone":"<g><path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></g>","local-pizza":"<g><path d=\"M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>","local-play":"<g><path d=\"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z\"></path></g>","local-post-office":"<g><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g>","local-printshop":"<g><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g>","local-see":"<g><circle cx=\"12\" cy=\"12\" r=\"3.2\"></circle><path d=\"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"></path></g>","local-shipping":"<g><path d=\"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>","local-taxi":"<g><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"></path></g>",map:"<g><path d=\"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z\"></path></g>","my-location":"<g><path d=\"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>",navigation:"<g><path d=\"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z\"></path></g>","near-me":"<g><path d=\"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z\"></path></g>","person-pin":"<g><path d=\"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z\"></path></g>","person-pin-circle":"<g><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z\"></path></g>","pin-drop":"<g><path d=\"M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z\"></path></g>",place:"<g><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g>","rate-review":"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z\"></path></g>",restaurant:"<g><path d=\"M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z\"></path></g>","restaurant-menu":"<g><path d=\"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z\"></path></g>",satellite:"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z\"></path></g>","store-mall-directory":"<g><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g>",streetview:"<g><path d=\"M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z\"></path><circle cx=\"18\" cy=\"6\" r=\"5\"></circle><path d=\"M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z\"></path></g>",subway:"<g><circle cx=\"15.5\" cy=\"16\" r=\"1\"></circle><circle cx=\"8.5\" cy=\"16\" r=\"1\"></circle><path d=\"M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z\"></path></g>",terrain:"<g><path d=\"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z\"></path></g>",traffic:"<g><path d=\"M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z\"></path></g>",train:"<g><path d=\"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>",tram:"<g><path d=\"M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z\"></path></g>","transfer-within-a-station":"<g><path d=\"M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75\"></path></g>","zoom-out-map":"<g><path d=\"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z\"></path></g>"};_exports.MapsIcons=MapsIcons;var mapsIcons={MapsIcons:MapsIcons};/**
    * Places Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/places-icons
    *
    */_exports.$mapsIcons=mapsIcons;const PlacesIcons={"ac-unit":"<g><path d=\"M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z\"></path></g>","airport-shuttle":"<g><path d=\"M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z\"></path></g>","all-inclusive":"<g><path d=\"M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z\"></path></g>","beach-access":"<g><path d=\"M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z\"></path></g>","business-center":"<g><path d=\"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z\"></path></g>",casino:"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z\"></path></g>","child-care":"<g><circle cx=\"14.5\" cy=\"10.5\" r=\"1.25\"></circle><circle cx=\"9.5\" cy=\"10.5\" r=\"1.25\"></circle><path d=\"M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z\"></path></g>","child-friendly":"<g><path d=\"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z\"></path></g>","fitness-center":"<g><path d=\"M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z\"></path></g>","free-breakfast":"<g><path d=\"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z\"></path></g>","golf-course":"<g><circle cx=\"19.5\" cy=\"19.5\" r=\"1.5\"></circle><path d=\"M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z\"></path></g>","hot-tub":"<g><circle cx=\"7\" cy=\"6\" r=\"2\"></circle><path d=\"M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z\"></path></g>",kitchen:"<g><path d=\"M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z\"></path></g>",pool:"<g><path d=\"M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z\"></path><circle cx=\"16.5\" cy=\"5.5\" r=\"2.5\"></circle></g>","room-service":"<g><path d=\"M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z\"></path></g>","rv-hookup":"<g><path d=\"M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z\"></path></g>","smoke-free":"<g><path d=\"M2 6l6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm2.5 7.23V13h-2.93z\"></path></g>","smoking-rooms":"<g><path d=\"M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z\"></path></g>",spa:"<g><path d=\"M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z\"></path><path d=\"M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z\"></path></g>"};_exports.PlacesIcons=PlacesIcons;var placesIcons={PlacesIcons:PlacesIcons};/**
    * Communication Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/iron-icons/communication-icons
    *
    */_exports.$placesIcons=placesIcons;const CommunicationIcons={business:"<g><path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\"></path></g>",call:"<g><path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></g>","call-end":"<g><path d=\"M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z\"></path></g>","call-made":"<g><path d=\"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z\"></path></g>","call-merge":"<g><path d=\"M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z\"></path></g>","call-missed":"<g><path d=\"M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z\"></path></g>","call-missed-outgoing":"<g><path d=\"M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z\"></path></g>","call-received":"<g><path d=\"M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z\"></path></g>","call-split":"<g><path d=\"M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z\"></path></g>",chat:"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z\"></path></g>","chat-bubble":"<g><path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z\"></path></g>","chat-bubble-outline":"<g><path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z\"></path></g>","clear-all":"<g><path d=\"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z\"></path></g>",comment:"<g><path d=\"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"></path></g>","contact-mail":"<g><path d=\"M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z\"></path></g>","contact-phone":"<g><path d=\"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z\"></path></g>",contacts:"<g><path d=\"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z\"></path></g>","dialer-sip":"<g><path d=\"M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z\"></path></g>",dialpad:"<g><path d=\"M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>",email:"<g><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g>",forum:"<g><path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"></path></g>","import-contacts":"<g><path d=\"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z\"></path></g>","import-export":"<g><path d=\"M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z\"></path></g>","invert-colors-off":"<g><path d=\"M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z\"></path></g>","live-help":"<g><path d=\"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"></path></g>","location-off":"<g><path d=\"M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z\"></path></g>","location-on":"<g><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g>","mail-outline":"<g><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z\"></path></g>",message:"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"></path></g>","no-sim":"<g><path d=\"M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z\"></path></g>",phone:"<g><path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></g>","phonelink-erase":"<g><path d=\"M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z\"></path></g>","phonelink-lock":"<g><path d=\"M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z\"></path></g>","phonelink-ring":"<g><path d=\"M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z\"></path></g>","phonelink-setup":"<g><path d=\"M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z\"></path></g>","portable-wifi-off":"<g><path d=\"M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z\"></path></g>","present-to-all":"<g><path d=\"M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z\"></path></g>","ring-volume":"<g><path d=\"M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z\"></path></g>","rss-feed":"<g><circle cx=\"6.18\" cy=\"17.82\" r=\"2.18\"></circle><path d=\"M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z\"></path></g>","screen-share":"<g><path d=\"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z\"></path></g>","speaker-phone":"<g><path d=\"M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z\"></path></g>","stay-current-landscape":"<g><path d=\"M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z\"></path></g>","stay-current-portrait":"<g><path d=\"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g>","stay-primary-landscape":"<g><path d=\"M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z\"></path></g>","stay-primary-portrait":"<g><path d=\"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g>","stop-screen-share":"<g><path d=\"M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z\"></path></g>","swap-calls":"<g><path d=\"M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z\"></path></g>",textsms:"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z\"></path></g>",voicemail:"<g><path d=\"M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z\"></path></g>","vpn-key":"<g><path d=\"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>"};_exports.CommunicationIcons=CommunicationIcons;var communicationIcons={CommunicationIcons:CommunicationIcons};/**
    * Notification Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/notification-icons
    *
    */_exports.$communicationIcons=communicationIcons;const NotificationIcons={adb:"<g><path d=\"M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g>","airline-seat-flat":"<g><path d=\"M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z\"></path></g>","airline-seat-flat-angled":"<g><path d=\"M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z\"></path></g>","airline-seat-individual-suite":"<g><path d=\"M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z\"></path></g>","airline-seat-legroom-extra":"<g><path d=\"M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z\"></path></g>","airline-seat-legroom-normal":"<g><path d=\"M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z\"></path></g>","airline-seat-legroom-reduced":"<g><path d=\"M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z\"></path></g>","airline-seat-recline-extra":"<g><path d=\"M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76C4.37 19.2 6.47 21 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38-.32-.09-.66-.12-.99-.06h-.02c-1.23.22-2.05 1.39-1.84 2.61l1.35 5.92C7.16 16.98 8.39 18 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z\"></path></g>","airline-seat-recline-normal":"<g><path d=\"M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z\"></path></g>","bluetooth-audio":"<g><path d=\"M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z\"></path></g>","confirmation-number":"<g><path d=\"M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z\"></path></g>","disc-full":"<g><path d=\"M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>","do-not-disturb":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z\"></path></g>","do-not-disturb-alt":"<g><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z\"></path></g>","do-not-disturb-off":"<g><path d=\"M17 11v2h-1.46l4.68 4.68C21.34 16.07 22 14.11 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z\"></path></g>","do-not-disturb-on":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z\"></path></g>","drive-eta":"<g><path d=\"M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z\"></path></g>","enhanced-encryption":"<g><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z\"></path></g>","event-available":"<g><path d=\"M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z\"></path></g>","event-busy":"<g><path d=\"M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z\"></path></g>","event-note":"<g><path d=\"M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z\"></path></g>","folder-special":"<g><path d=\"M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z\"></path></g>","live-tv":"<g><path d=\"M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z\"></path></g>",mms:"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z\"></path></g>",more:"<g><path d=\"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>","network-check":"<g><path d=\"M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z\"></path></g>","network-locked":"<g><path d=\"M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5c0-1.38-1.12-2.5-2.5-2.5S17 13.12 17 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z\"></path></g>","no-encryption":"<g><path d=\"M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z\"></path></g>","ondemand-video":"<g><path d=\"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z\"></path></g>","personal-video":"<g><path d=\"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z\"></path></g>","phone-bluetooth-speaker":"<g><path d=\"M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3l.94.94-.94.94V7.21zm2 8.29c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z\"></path></g>","phone-forwarded":"<g><path d=\"M18 11l5-5-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z\"></path></g>","phone-in-talk":"<g><path d=\"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z\"></path></g>","phone-locked":"<g><path d=\"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 4v-.5C20 2.12 18.88 1 17.5 1S15 2.12 15 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4z\"></path></g>","phone-missed":"<g><path d=\"M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z\"></path></g>","phone-paused":"<g><path d=\"M17 3h-2v7h2V3zm3 12.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 3v7h2V3h-2z\"></path></g>",power:"<g><path d=\"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z\"></path></g>","priority-high":"<g><circle cx=\"12\" cy=\"19\" r=\"2\"></circle><path d=\"M10 3h4v12h-4z\"></path></g>","rv-hookup":"<g><path d=\"M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z\"></path></g>","sd-card":"<g><path d=\"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z\"></path></g>","sim-card-alert":"<g><path d=\"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z\"></path></g>",sms:"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z\"></path></g>","sms-failed":"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z\"></path></g>",sync:"<g><path d=\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"></path></g>","sync-disabled":"<g><path d=\"M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z\"></path></g>","sync-problem":"<g><path d=\"M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z\"></path></g>","system-update":"<g><path d=\"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z\"></path></g>","tap-and-play":"<g><path d=\"M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z\"></path></g>","time-to-leave":"<g><path d=\"M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z\"></path></g>",vibration:"<g><path d=\"M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z\"></path></g>","voice-chat":"<g><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z\"></path></g>","vpn-lock":"<g><path d=\"M22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z\"></path></g>",wc:"<g><path d=\"M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z\"></path></g>",wifi:"<g><path d=\"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z\"></path></g>"};_exports.NotificationIcons=NotificationIcons;var notificationIcons={NotificationIcons:NotificationIcons};/**
    * AV Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/av-icons
    *
    */_exports.$notificationIcons=notificationIcons;const AvIcons={"add-to-queue":"<g><path d=\"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z\"></path></g>",airplay:"<g><path d=\"M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g>",album:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z\"></path></g>","art-track":"<g><path d=\"M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z\"></path></g>","av-timer":"<g><path d=\"M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z\"></path></g>","branding-watermark":"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z\"></path></g>","call-to-action":"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z\"></path></g>","closed-caption":"<g><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z\"></path></g>",equalizer:"<g><path d=\"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z\"></path></g>",explicit:"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z\"></path></g>","fast-forward":"<g><path d=\"M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z\"></path></g>","fast-rewind":"<g><path d=\"M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z\"></path></g>","featured-play-list":"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z\"></path></g>","featured-video":"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z\"></path></g>","fiber-dvr":"<g><path d=\"M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z\"></path></g>","fiber-manual-record":"<g><circle cx=\"12\" cy=\"12\" r=\"8\"></circle></g>","fiber-new":"<g><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z\"></path></g>","fiber-pin":"<g><path d=\"M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z\"></path></g>","fiber-smart-record":"<g><g><circle cx=\"9\" cy=\"12\" r=\"8\"></circle><path d=\"M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z\"></path></g></g>","forward-10":"<g><path d=\"M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z\"></path></g>","forward-30":"<g><path d=\"M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z\"></path></g>","forward-5":"<g><path d=\"M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z\"></path></g>",games:"<g><path d=\"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z\"></path></g>",hd:"<g><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z\"></path></g>",hearing:"<g><path d=\"M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z\"></path></g>","high-quality":"<g><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z\"></path></g>","library-add":"<g><path d=\"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z\"></path></g>","library-books":"<g><path d=\"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z\"></path></g>","library-music":"<g><path d=\"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z\"></path></g>",loop:"<g><path d=\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"></path></g>",mic:"<g><path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"></path></g>","mic-none":"<g><path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"></path></g>","mic-off":"<g><path d=\"M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z\"></path></g>",movie:"<g><path d=\"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z\"></path></g>","music-video":"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z\"></path></g>","new-releases":"<g><path d=\"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g>","not-interested":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z\"></path></g>",note:"<g><path d=\"M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z\"></path></g>",pause:"<g><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"></path></g>","pause-circle-filled":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z\"></path></g>","pause-circle-outline":"<g><path d=\"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z\"></path></g>","play-arrow":"<g><path d=\"M8 5v14l11-7z\"></path></g>","play-circle-filled":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z\"></path></g>","play-circle-outline":"<g><path d=\"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>","playlist-add":"<g><path d=\"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z\"></path></g>","playlist-add-check":"<g><path d=\"M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z\"></path></g>","playlist-play":"<g><path d=\"M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z\"></path></g>",queue:"<g><path d=\"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z\"></path></g>","queue-music":"<g><path d=\"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z\"></path></g>","queue-play-next":"<g><path d=\"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z\"></path></g>",radio:"<g><path d=\"M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z\"></path></g>","recent-actors":"<g><path d=\"M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z\"></path></g>","remove-from-queue":"<g><path d=\"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z\"></path></g>",repeat:"<g><path d=\"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z\"></path></g>","repeat-one":"<g><path d=\"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z\"></path></g>",replay:"<g><path d=\"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z\"></path></g>","replay-10":"<g><path d=\"M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z\"></path></g>","replay-30":"<g><path d=\"M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z\"></path></g>","replay-5":"<g><path d=\"M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z\"></path></g>",shuffle:"<g><path d=\"M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z\"></path></g>","skip-next":"<g><path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\"></path></g>","skip-previous":"<g><path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\"></path></g>","slow-motion-video":"<g><path d=\"M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z\"></path></g>",snooze:"<g><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z\"></path></g>","sort-by-alpha":"<g><path d=\"M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z\"></path></g>",stop:"<g><path d=\"M6 6h12v12H6z\"></path></g>",subscriptions:"<g><path d=\"M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z\"></path></g>",subtitles:"<g><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z\"></path></g>","surround-sound":"<g><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>","video-call":"<g><path d=\"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z\"></path></g>","video-label":"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z\"></path></g>","video-library":"<g><path d=\"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z\"></path></g>",videocam:"<g><path d=\"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z\"></path></g>","videocam-off":"<g><path d=\"M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z\"></path></g>","volume-down":"<g><path d=\"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z\"></path></g>","volume-mute":"<g><path d=\"M7 9v6h4l5 5V4l-5 5H7z\"></path></g>","volume-off":"<g><path d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\"></path></g>","volume-up":"<g><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"></path></g>",web:"<g><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z\"></path></g>","web-asset":"<g><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z\"></path></g>"};_exports.AvIcons=AvIcons;var avIcons={AvIcons:AvIcons};/**
    * Device Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/device-icons
    *
    */_exports.$avIcons=avIcons;const DeviceIcons={"access-alarm":"<g><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>","access-alarms":"<g><path d=\"M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z\"></path></g>","access-time":"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g>","add-alarm":"<g><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"></path></g>","airplanemode-active":"<g><path d=\"M10.18 9\"></path><path d=\"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z\"></path></g>","airplanemode-inactive":"<g><path d=\"M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z\"></path></g>","battery-20":"<g><path d=\"M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z\"></path><path fill-opacity=\".3\" d=\"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z\"></path></g>","battery-30":"<g><path fill-opacity=\".3\" d=\"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z\"></path><path d=\"M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z\"></path></g>","battery-50":"<g><path fill-opacity=\".3\" d=\"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z\"></path><path d=\"M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z\"></path></g>","battery-60":"<g><path fill-opacity=\".3\" d=\"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z\"></path><path d=\"M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z\"></path></g>","battery-80":"<g><path fill-opacity=\".3\" d=\"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z\"></path><path d=\"M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z\"></path></g>","battery-90":"<g><path fill-opacity=\".3\" d=\"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z\"></path><path d=\"M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z\"></path></g>","battery-alert":"<g><path d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z\"></path></g>","battery-charging-20":"<g><path d=\"M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z\"></path><path fill-opacity=\".3\" d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z\"></path></g>","battery-charging-30":"<g><path fill-opacity=\".3\" d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z\"></path><path d=\"M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z\"></path></g>","battery-charging-50":"<g><path d=\"M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z\"></path><path fill-opacity=\".3\" d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z\"></path></g>","battery-charging-60":"<g><path fill-opacity=\".3\" d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z\"></path><path d=\"M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z\"></path></g>","battery-charging-80":"<g><path fill-opacity=\".3\" d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z\"></path><path d=\"M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z\"></path></g>","battery-charging-90":"<g><path fill-opacity=\".3\" d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z\"></path><path d=\"M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z\"></path></g>","battery-charging-full":"<g><path d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z\"></path></g>","battery-full":"<g><path d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z\"></path></g>","battery-std":"<g><path d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z\"></path></g>","battery-unknown":"<g><path d=\"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z\"></path></g>",bluetooth:"<g><path d=\"M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z\"></path></g>","bluetooth-connected":"<g><path d=\"M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z\"></path></g>","bluetooth-disabled":"<g><path d=\"M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z\"></path></g>","bluetooth-searching":"<g><path d=\"M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z\"></path></g>","brightness-auto":"<g><path d=\"M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z\"></path></g>","brightness-high":"<g><path d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\"></path></g>","brightness-low":"<g><path d=\"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z\"></path></g>","brightness-medium":"<g><path d=\"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z\"></path></g>","data-usage":"<g><path d=\"M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z\"></path></g>","developer-mode":"<g><path d=\"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z\"></path></g>",devices:"<g><path d=\"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z\"></path></g>",dvr:"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z\"></path></g>","gps-fixed":"<g><path d=\"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>","gps-not-fixed":"<g><path d=\"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>","gps-off":"<g><path d=\"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z\"></path></g>","graphic-eq":"<g><path d=\"M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z\"></path></g>","location-disabled":"<g><path d=\"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z\"></path></g>","location-searching":"<g><path d=\"M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>","network-cell":"<g><path fill-opacity=\".3\" d=\"M2 22h20V2z\"></path><path d=\"M17 7L2 22h15z\"></path></g>","network-wifi":"<g><path fill-opacity=\".3\" d=\"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z\"></path><path d=\"M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z\"></path></g>",nfc:"<g><path d=\"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z\"></path></g>","screen-lock-landscape":"<g><path d=\"M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z\"></path></g>","screen-lock-portrait":"<g><path d=\"M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z\"></path></g>","screen-lock-rotation":"<g><path d=\"M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z\"></path></g>","screen-rotation":"<g><path d=\"M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z\"></path></g>","sd-storage":"<g><path d=\"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z\"></path></g>","settings-system-daydream":"<g><path d=\"M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g>","signal-cellular-0-bar":"<g><path fill-opacity=\".3\" d=\"M2 22h20V2z\"></path></g>","signal-cellular-1-bar":"<g><path fill-opacity=\".3\" d=\"M2 22h20V2z\"></path><path d=\"M12 12L2 22h10z\"></path></g>","signal-cellular-2-bar":"<g><path fill-opacity=\".3\" d=\"M2 22h20V2z\"></path><path d=\"M14 10L2 22h12z\"></path></g>","signal-cellular-3-bar":"<g><path fill-opacity=\".3\" d=\"M2 22h20V2z\"></path><path d=\"M17 7L2 22h15z\"></path></g>","signal-cellular-4-bar":"<g><path d=\"M2 22h20V2z\"></path></g>","signal-cellular-connected-no-internet-0-bar":"<g><path fill-opacity=\".3\" d=\"M22 8V2L2 22h16V8z\"></path><path d=\"M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z\"></path></g>","signal-cellular-connected-no-internet-1-bar":"<g><path fill-opacity=\".3\" d=\"M22 8V2L2 22h16V8z\"></path><path d=\"M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z\"></path></g>","signal-cellular-connected-no-internet-2-bar":"<g><path fill-opacity=\".3\" d=\"M22 8V2L2 22h16V8z\"></path><path d=\"M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z\"></path></g>","signal-cellular-connected-no-internet-3-bar":"<g><path fill-opacity=\".3\" d=\"M22 8V2L2 22h16V8z\"></path><path d=\"M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z\"></path></g>","signal-cellular-connected-no-internet-4-bar":"<g><path d=\"M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z\"></path></g>","signal-cellular-no-sim":"<g><path d=\"M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z\"></path></g>","signal-cellular-null":"<g><path d=\"M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z\"></path></g>","signal-cellular-off":"<g><path d=\"M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z\"></path></g>","signal-wifi-0-bar":"<g><path fill-opacity=\".3\" d=\"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z\"></path></g>","signal-wifi-1-bar":"<g><path fill-opacity=\".3\" d=\"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z\"></path><path d=\"M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z\"></path></g>","signal-wifi-1-bar-lock":"<g><path d=\"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z\"></path><path d=\"M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z\" opacity=\".3\"></path><path d=\"M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z\"></path></g>","signal-wifi-2-bar":"<g><path fill-opacity=\".3\" d=\"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z\"></path><path d=\"M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z\"></path></g>","signal-wifi-2-bar-lock":"<g><path d=\"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z\"></path><path d=\"M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z\" opacity=\".3\"></path><path d=\"M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z\"></path></g>","signal-wifi-3-bar":"<g><path fill-opacity=\".3\" d=\"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z\"></path><path d=\"M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z\"></path></g>","signal-wifi-3-bar-lock":"<g><path opacity=\".3\" d=\"M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z\"></path><path d=\"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9\"></path></g>","signal-wifi-4-bar":"<g><path d=\"M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z\"></path></g>","signal-wifi-4-bar-lock":"<g><path d=\"M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z\"></path></g>","signal-wifi-off":"<g><path d=\"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z\"></path></g>",storage:"<g><path d=\"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z\"></path></g>",usb:"<g><path d=\"M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z\"></path></g>",wallpaper:"<g><path d=\"M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z\"></path></g>",widgets:"<g><path d=\"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z\"></path></g>","wifi-lock":"<g><path d=\"M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z\"></path></g>","wifi-tethering":"<g><path d=\"M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z\"></path></g>"};_exports.DeviceIcons=DeviceIcons;var deviceIcons={DeviceIcons:DeviceIcons};/**
    * Editor Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/editor-icons
    *
    */_exports.$deviceIcons=deviceIcons;const EditorIcons={"attach-file":"<g><path d=\"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z\"></path></g>","attach-money":"<g><path d=\"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z\"></path></g>","border-all":"<g><path d=\"M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z\"></path></g>","border-bottom":"<g><path d=\"M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z\"></path></g>","border-clear":"<g><path d=\"M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z\"></path></g>","border-color":"<g><path d=\"M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z\"></path><path fill-opacity=\".36\" d=\"M0 20h24v4H0z\"></path></g>","border-horizontal":"<g><path d=\"M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z\"></path></g>","border-inner":"<g><path d=\"M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z\"></path></g>","border-left":"<g><path d=\"M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z\"></path></g>","border-outer":"<g><path d=\"M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z\"></path></g>","border-right":"<g><path d=\"M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z\"></path></g>","border-style":"<g><path d=\"M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z\"></path></g>","border-top":"<g><path d=\"M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z\"></path></g>","border-vertical":"<g><path d=\"M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z\"></path></g>","bubble-chart":"<g><circle cx=\"7.2\" cy=\"14.4\" r=\"3.2\"></circle><circle cx=\"14.8\" cy=\"18\" r=\"2\"></circle><circle cx=\"15.2\" cy=\"8.8\" r=\"4.8\"></circle></g>","drag-handle":"<g><path d=\"M20 9H4v2h16V9zM4 15h16v-2H4v2z\"></path></g>","format-align-center":"<g><path d=\"M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z\"></path></g>","format-align-justify":"<g><path d=\"M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z\"></path></g>","format-align-left":"<g><path d=\"M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z\"></path></g>","format-align-right":"<g><path d=\"M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z\"></path></g>","format-bold":"<g><path d=\"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z\"></path></g>","format-clear":"<g><path d=\"M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z\"></path></g>","format-color-fill":"<g><path d=\"M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z\"></path><path fill-opacity=\".36\" d=\"M0 20h24v4H0z\"></path></g>","format-color-reset":"<g><path d=\"M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z\"></path></g>","format-color-text":"<g><path fill-opacity=\".36\" d=\"M0 20h24v4H0z\"></path><path d=\"M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z\"></path></g>","format-indent-decrease":"<g><path d=\"M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z\"></path></g>","format-indent-increase":"<g><path d=\"M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z\"></path></g>","format-italic":"<g><path d=\"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z\"></path></g>","format-line-spacing":"<g><path d=\"M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z\"></path></g>","format-list-bulleted":"<g><path d=\"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z\"></path></g>","format-list-numbered":"<g><path d=\"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z\"></path></g>","format-paint":"<g><path d=\"M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z\"></path></g>","format-quote":"<g><path d=\"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z\"></path></g>","format-shapes":"<g><path d=\"M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z\"></path></g>","format-size":"<g><path d=\"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z\"></path></g>","format-strikethrough":"<g><path d=\"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z\"></path></g>","format-textdirection-l-to-r":"<g><path d=\"M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z\"></path></g>","format-textdirection-r-to-l":"<g><path d=\"M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z\"></path></g>","format-underlined":"<g><path d=\"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z\"></path></g>",functions:"<g><path d=\"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z\"></path></g>",highlight:"<g><path d=\"M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z\"></path></g>","insert-chart":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"></path></g>","insert-comment":"<g><path d=\"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"></path></g>","insert-drive-file":"<g><path d=\"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z\"></path></g>","insert-emoticon":"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z\"></path></g>","insert-invitation":"<g><path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\"></path></g>","insert-link":"<g><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></g>","insert-photo":"<g><path d=\"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\"></path></g>","linear-scale":"<g><path d=\"M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z\"></path></g>","merge-type":"<g><path d=\"M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z\"></path></g>","mode-comment":"<g><path d=\"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z\"></path></g>","mode-edit":"<g><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></g>","monetization-on":"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z\"></path></g>","money-off":"<g><path d=\"M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z\"></path></g>","multiline-chart":"<g><path d=\"M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z\"></path></g>","pie-chart":"<g><path d=\"M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z\"></path></g>","pie-chart-outlined":"<g><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z\"></path></g>",publish:"<g><path d=\"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z\"></path></g>","short-text":"<g><path d=\"M4 9h16v2H4zm0 4h10v2H4z\"></path></g>","show-chart":"<g><path d=\"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z\"></path></g>","space-bar":"<g><path d=\"M18 9v4H6V9H4v6h16V9z\"></path></g>","strikethrough-s":"<g><path d=\"M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z\"></path></g>","text-fields":"<g><path d=\"M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z\"></path></g>",title:"<g><path d=\"M5 4v3h5.5v12h3V7H19V4z\"></path></g>","vertical-align-bottom":"<g><path d=\"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z\"></path></g>","vertical-align-center":"<g><path d=\"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z\"></path></g>","vertical-align-top":"<g><path d=\"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z\"></path></g>","wrap-text":"<g><path d=\"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"></path></g>"};_exports.EditorIcons=EditorIcons;var editorIcons={EditorIcons:EditorIcons};/**
    * Social Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/social-icons
    *
    */_exports.$editorIcons=editorIcons;const SocialIcons={cake:"<g><path d=\"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z\"></path></g>",domain:"<g><path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\"></path></g>",group:"<g><path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\"></path></g>","group-add":"<g><path d=\"M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z\"></path></g>","location-city":"<g><path d=\"M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z\"></path></g>",mood:"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z\"></path></g>","mood-bad":"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z\"></path></g>",notifications:"<g><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"></path></g>","notifications-active":"<g><path d=\"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z\"></path></g>","notifications-none":"<g><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z\"></path></g>","notifications-off":"<g><path d=\"M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z\"></path></g>","notifications-paused":"<g><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z\"></path></g>",pages:"<g><path d=\"M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z\"></path></g>","party-mode":"<g><path d=\"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z\"></path></g>",people:"<g><path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\"></path></g>","people-outline":"<g><path d=\"M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z\"></path></g>",person:"<g><path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"></path></g>","person-add":"<g><path d=\"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"></path></g>","person-outline":"<g><path d=\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\"></path></g>","plus-one":"<g><path d=\"M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z\"></path></g>",poll:"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"></path></g>",public:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"></path></g>",school:"<g><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"></path></g>","sentiment-dissatisfied":"<g><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\"></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\"></circle><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z\"></path></g>","sentiment-neutral":"<g><path d=\"M9 14h6v1.5H9z\"></path><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\"></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\"></circle><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>","sentiment-satisfied":"<g><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\"></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\"></circle><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z\"></path></g>","sentiment-very-dissatisfied":"<g><path d=\"M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z\"></path></g>","sentiment-very-satisfied":"<g><path d=\"M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z\"></path></g>",share:"<g><path d=\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z\"></path></g>",whatshot:"<g><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"></path></g>"};_exports.SocialIcons=SocialIcons;var socialIcons={SocialIcons:SocialIcons};/**
    * Hardware Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/hardware-icons
    *
    */_exports.$socialIcons=socialIcons;const HardwareIcons={cast:"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z\"></path></g>","cast-connected":"<g><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g>",computer:"<g><path d=\"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z\"></path></g>","desktop-mac":"<g><path d=\"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z\"></path></g>","desktop-windows":"<g><path d=\"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z\"></path></g>","developer-board":"<g><path d=\"M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z\"></path></g>","device-hub":"<g><path d=\"M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z\"></path></g>","devices-other":"<g><path d=\"M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z\"></path></g>",dock:"<g><path d=\"M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z\"></path></g>",gamepad:"<g><path d=\"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z\"></path></g>",headset:"<g><path d=\"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z\"></path></g>","headset-mic":"<g><path d=\"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z\"></path></g>",keyboard:"<g><path d=\"M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z\"></path></g>","keyboard-arrow-down":"<g><path d=\"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z\"></path></g>","keyboard-arrow-left":"<g><path d=\"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z\"></path></g>","keyboard-arrow-right":"<g><path d=\"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z\"></path></g>","keyboard-arrow-up":"<g><path d=\"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z\"></path></g>","keyboard-backspace":"<g><path d=\"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z\"></path></g>","keyboard-capslock":"<g><path d=\"M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z\"></path></g>","keyboard-hide":"<g><path d=\"M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z\"></path></g>","keyboard-return":"<g><path d=\"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z\"></path></g>","keyboard-tab":"<g><path d=\"M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z\"></path></g>","keyboard-voice":"<g><path d=\"M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"></path></g>",laptop:"<g><path d=\"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z\"></path></g>","laptop-chromebook":"<g><path d=\"M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z\"></path></g>","laptop-mac":"<g><path d=\"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g>","laptop-windows":"<g><path d=\"M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z\"></path></g>",memory:"<g><path d=\"M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z\"></path></g>",mouse:"<g><path d=\"M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z\"></path></g>","phone-android":"<g><path d=\"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z\"></path></g>","phone-iphone":"<g><path d=\"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z\"></path></g>",phonelink:"<g><path d=\"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z\"></path></g>","phonelink-off":"<g><path d=\"M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z\"></path></g>","power-input":"<g><path d=\"M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z\"></path></g>",router:"<g><path d=\"M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z\"></path></g>",scanner:"<g><path d=\"M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z\"></path></g>",security:"<g><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z\"></path></g>","sim-card":"<g><path d=\"M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z\"></path></g>",smartphone:"<g><path d=\"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g>",speaker:"<g><path d=\"M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g>","speaker-group":"<g><path d=\"M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"></path><circle cx=\"14\" cy=\"12.5\" r=\"2.5\"></circle><path d=\"M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z\"></path></g>",tablet:"<g><path d=\"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z\"></path></g>","tablet-android":"<g><path d=\"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z\"></path></g>","tablet-mac":"<g><path d=\"M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z\"></path></g>",toys:"<g><path d=\"M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z\"></path></g>",tv:"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z\"></path></g>","videogame-asset":"<g><path d=\"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>",watch:"<g><path d=\"M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z\"></path></g>"};_exports.HardwareIcons=HardwareIcons;var hardwareIcons={HardwareIcons:HardwareIcons};/**
    * Image Icons
    * This is a set of the 24x24 icons from https://github.com/google/material-design-icons.
    *
    * The set correspondents with the set of @polymer/iron-icons/image-icons
    *
    */_exports.$hardwareIcons=hardwareIcons;const ImageIcons={"add-a-photo":"<g><path d=\"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z\"></path></g>","add-to-photos":"<g><path d=\"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z\"></path></g>",adjust:"<g><path d=\"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z\"></path></g>",assistant:"<g><path d=\"M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z\"></path></g>","assistant-photo":"<g><path d=\"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z\"></path></g>",audiotrack:"<g><path d=\"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z\"></path></g>","blur-circular":"<g><path d=\"M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z\"></path></g>","blur-linear":"<g><path d=\"M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z\"></path></g>","blur-off":"<g><path d=\"M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z\"></path></g>","blur-on":"<g><path d=\"M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path></g>","brightness-1":"<g><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></g>","brightness-2":"<g><path d=\"M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z\"></path></g>","brightness-3":"<g><path d=\"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z\"></path></g>","brightness-4":"<g><path d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z\"></path></g>","brightness-5":"<g><path d=\"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z\"></path></g>","brightness-6":"<g><path d=\"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z\"></path></g>","brightness-7":"<g><path d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\"></path></g>","broken-image":"<g><path d=\"M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z\"></path></g>",brush:"<g><path d=\"M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z\"></path></g>","burst-mode":"<g><path d=\"M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z\"></path></g>",camera:"<g><path d=\"M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z\"></path></g>","camera-alt":"<g><circle cx=\"12\" cy=\"12\" r=\"3.2\"></circle><path d=\"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"></path></g>","camera-front":"<g><path d=\"M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z\"></path></g>","camera-rear":"<g><path d=\"M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z\"></path></g>","camera-roll":"<g><path d=\"M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z\"></path></g>","center-focus-strong":"<g><path d=\"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z\"></path></g>","center-focus-weak":"<g><path d=\"M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>",collections:"<g><path d=\"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z\"></path></g>","collections-bookmark":"<g><path d=\"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z\"></path></g>","color-lens":"<g><path d=\"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>",colorize:"<g><path d=\"M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z\"></path></g>",compare:"<g><path d=\"M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g>","control-point":"<g><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>","control-point-duplicate":"<g><path d=\"M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z\"></path></g>",crop:"<g><path d=\"M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z\"></path></g>","crop-16-9":"<g><path d=\"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z\"></path></g>","crop-3-2":"<g><path d=\"M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z\"></path></g>","crop-5-4":"<g><path d=\"M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z\"></path></g>","crop-7-5":"<g><path d=\"M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z\"></path></g>","crop-din":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z\"></path></g>","crop-free":"<g><path d=\"M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z\"></path></g>","crop-landscape":"<g><path d=\"M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z\"></path></g>","crop-original":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z\"></path></g>","crop-portrait":"<g><path d=\"M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z\"></path></g>","crop-rotate":"<g><path d=\"M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z\"></path></g>","crop-square":"<g><path d=\"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z\"></path></g>",dehaze:"<g><path d=\"M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z\"></path></g>",details:"<g><path d=\"M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z\"></path></g>",edit:"<g><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></g>",exposure:"<g><path d=\"M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z\"></path></g>","exposure-neg-1":"<g><path d=\"M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z\"></path></g>","exposure-neg-2":"<g><path d=\"M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z\"></path></g>","exposure-plus-1":"<g><path d=\"M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z\"></path></g>","exposure-plus-2":"<g><path d=\"M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z\"></path></g>","exposure-zero":"<g><path d=\"M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z\"></path></g>",filter:"<g><path d=\"M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"></path></g>","filter-1":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"></path></g>","filter-2":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z\"></path></g>","filter-3":"<g><path d=\"M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z\"></path></g>","filter-4":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"></path></g>","filter-5":"<g><path d=\"M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z\"></path></g>","filter-6":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z\"></path></g>","filter-7":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z\"></path></g>","filter-8":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z\"></path></g>","filter-9":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z\"></path></g>","filter-9-plus":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z\"></path></g>","filter-b-and-w":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z\"></path></g>","filter-center-focus":"<g><path d=\"M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g>","filter-drama":"<g><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z\"></path></g>","filter-frames":"<g><path d=\"M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12\"></path></g>","filter-hdr":"<g><path d=\"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z\"></path></g>","filter-none":"<g><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"></path></g>","filter-tilt-shift":"<g><path d=\"M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z\"></path></g>","filter-vintage":"<g><path d=\"M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"></path></g>",flare:"<g><path d=\"M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z\"></path></g>","flash-auto":"<g><path d=\"M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z\"></path></g>","flash-off":"<g><path d=\"M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z\"></path></g>","flash-on":"<g><path d=\"M7 2v11h3v9l7-12h-4l4-8z\"></path></g>",flip:"<g><path d=\"M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z\"></path></g>",gradient:"<g><path d=\"M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z\"></path></g>",grain:"<g><path d=\"M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>","grid-off":"<g><path d=\"M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z\"></path></g>","grid-on":"<g><path d=\"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z\"></path></g>","hdr-off":"<g><path d=\"M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z\"></path></g>","hdr-on":"<g><path d=\"M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z\"></path></g>","hdr-strong":"<g><path d=\"M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>","hdr-weak":"<g><path d=\"M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"></path></g>",healing:"<g><path d=\"M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z\"></path></g>",image:"<g><path d=\"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\"></path></g>","image-aspect-ratio":"<g><path d=\"M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z\"></path></g>",iso:"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z\"></path></g>",landscape:"<g><path d=\"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z\"></path></g>","leak-add":"<g><path d=\"M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z\"></path></g>","leak-remove":"<g><path d=\"M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z\"></path></g>",lens:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z\"></path></g>","linked-camera":"<g><circle cx=\"12\" cy=\"14\" r=\"3.2\"></circle><path d=\"M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6\"></path><path d=\"M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"></path></g>",looks:"<g><path d=\"M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z\"></path></g>","looks-3":"<g><path d=\"M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z\"></path></g>","looks-4":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z\"></path></g>","looks-5":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z\"></path></g>","looks-6":"<g><path d=\"M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z\"></path></g>","looks-one":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z\"></path></g>","looks-two":"<g><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z\"></path></g>",loupe:"<g><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>","monochrome-photos":"<g><path d=\"M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z\"></path></g>","movie-creation":"<g><path d=\"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z\"></path></g>","movie-filter":"<g><path d=\"M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z\"></path></g>","music-note":"<g><path d=\"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z\"></path></g>",nature:"<g><path d=\"M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z\"></path></g>","nature-people":"<g><path d=\"M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z\"></path></g>","navigate-before":"<g><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></g>","navigate-next":"<g><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></g>",palette:"<g><path d=\"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g>",panorama:"<g><path d=\"M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z\"></path></g>","panorama-fish-eye":"<g><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g>","panorama-horizontal":"<g><path d=\"M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z\"></path></g>","panorama-vertical":"<g><path d=\"M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z\"></path></g>","panorama-wide-angle":"<g><path d=\"M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z\"></path></g>",photo:"<g><path d=\"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\"></path></g>","photo-album":"<g><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z\"></path></g>","photo-camera":"<g><circle cx=\"12\" cy=\"12\" r=\"3.2\"></circle><path d=\"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"></path></g>","photo-filter":"<g><path d=\"M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z\"></path></g>","photo-library":"<g><path d=\"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z\"></path></g>","photo-size-select-actual":"<g><path d=\"M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z\"></path></g>","photo-size-select-large":"<g><path d=\"M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z\"></path></g>","photo-size-select-small":"<g><path d=\"M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z\"></path></g>","picture-as-pdf":"<g><path d=\"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z\"></path></g>",portrait:"<g><path d=\"M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z\"></path></g>","remove-red-eye":"<g><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g>","rotate-90-degrees-ccw":"<g><path d=\"M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z\"></path></g>","rotate-left":"<g><path d=\"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z\"></path></g>","rotate-right":"<g><path d=\"M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z\"></path></g>",slideshow:"<g><path d=\"M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z\"></path></g>",straighten:"<g><path d=\"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z\"></path></g>",style:"<g><path d=\"M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z\"></path></g>","switch-camera":"<g><path d=\"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z\"></path></g>","switch-video":"<g><path d=\"M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z\"></path></g>","tag-faces":"<g><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z\"></path></g>",texture:"<g><path d=\"M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z\"></path></g>",timelapse:"<g><path d=\"M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g>",timer:"<g><path d=\"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g>","timer-10":"<g><path d=\"M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z\"></path></g>","timer-3":"<g><path d=\"M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z\"></path></g>","timer-off":"<g><path d=\"M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z\"></path></g>",tonality:"<g><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z\"></path></g>",transform:"<g><path d=\"M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z\"></path></g>",tune:"<g><path d=\"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z\"></path></g>","view-comfy":"<g><path d=\"M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z\"></path></g>","view-compact":"<g><path d=\"M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z\"></path></g>",vignette:"<g><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z\"></path></g>","wb-auto":"<g><path d=\"M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z\"></path></g>","wb-cloudy":"<g><path d=\"M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z\"></path></g>","wb-incandescent":"<g><path d=\"M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z\"></path></g>","wb-iridescent":"<g><path d=\"M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z\"></path></g>","wb-sunny":"<g><path d=\"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z\"></path></g>"};_exports.ImageIcons=ImageIcons;var imageIcons={ImageIcons:ImageIcons};// -- initialize application env, theme, api
_exports.$imageIcons=imageIcons;Iconset.registerIconset("furo",FuroDocIcons);Iconset.registerIconset("default",FuroBaseIcons);Iconset.registerIconset("av",AvIcons);Iconset.registerIconset("communication",CommunicationIcons);Iconset.registerIconset("device",DeviceIcons);Iconset.registerIconset("editor",EditorIcons);Iconset.registerIconset("social",SocialIcons);Iconset.registerIconset("places",PlacesIcons);Iconset.registerIconset("notification",NotificationIcons);Iconset.registerIconset("map",MapsIcons);Iconset.registerIconset("hardware",HardwareIcons);Iconset.registerIconset("image",ImageIcons);/**
                                              @license
                                              Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                              This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                              The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                              The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                              Code distributed by Google as part of the polymer project is also
                                              subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                              */"use strict";const nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;let nativeCssVariables_;/**
                          * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
                          */function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}/** @type {string | undefined} */let cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}/** @type {boolean} */const disableRuntime=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
const nativeCssVariables=/** @type {boolean} */nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
      Extremely simple css parser. Intended to be not more than what we need
      and definitely not necessarily correct =).
      */_exports.$styleSettings=styleSettings;"use strict";/** @unrestricted */class StyleNode{constructor(){/** @type {number} */this.start=0;/** @type {number} */this.end=0;/** @type {StyleNode} */this.previous=null;/** @type {StyleNode} */this.parent=null;/** @type {Array<StyleNode>} */this.rules=null;/** @type {string} */this.parsedCssText="";/** @type {string} */this.cssText="";/** @type {boolean} */this.atRule=!1;/** @type {number} */this.type=0;/** @type {string} */this.keyframesName="";/** @type {string} */this.selector="";/** @type {string} */this.parsedSelector=""}}/**
   * @param {string} text
   * @return {StyleNode}
   */_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */function lex(text){let root=new StyleNode;root.start=0;root.end=text.length;let n=root;for(let i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}let p=n,previous=p.rules[p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=p;n.previous=previous;p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */function parseCss(node,text){let t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){let ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(";")+1);let s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);// note, support a subset of rule types...
if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}let r$=node.rules;if(r$){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties,text=""){// calc rule cssText
let cssText="";if(node.cssText||node.rules){let r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}// emit rule if there is cssText
if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){let r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}/** @enum {number} */const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;const OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";var cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$cssParse=cssParse;const VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;const MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;const VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;const ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;const MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;const IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;const BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;const HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;const HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$commonRegex=commonRegex;"use strict";/** @type {!Set<string>} */const styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;/**
                                                   * Add a specifically-marked style to the document directly, and only one copy of that style.
                                                   *
                                                   * @param {!HTMLStyleElement} style
                                                   * @return {undefined}
                                                   */function processUnscopedStyle(style){const text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);const newStyle=style.cloneNode(!0);document.head.appendChild(newStyle)}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}let skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){let matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}let r$=node.rules;if(r$&&!skipRules){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */function applyCss(cssText,moniker,target,contextNode){let style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}/**
   * @param {string} cssText
   * @param {string} moniker
   * @return {HTMLStyleElement}
   */function createScopeStyle(cssText,moniker){let style=/** @type {HTMLStyleElement} */document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}/**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */let lastHeadApplyNode=null;// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */function applyStylePlaceHolder(moniker){let placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}/**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */function applyStyle(style,target,contextNode){target=target||document.head;let after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{// only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
let position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}/**
   * @param {string} buildType
   * @return {boolean}
   */function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){let level=0;for(let i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
let start=str.indexOf("var(");if(-1===start){// no var?, everything is prefix
return callback(str,"","","")}//${prefix}var(${inner})${suffix}
let end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");// value and fallback args should be trimmed to match in property lookup
if(-1===comma){// variable, no fallback
return callback(prefix,inner.trim(),"",suffix)}// var(${value},${fallback})
let value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}/**
   * @param {Element} element
   * @param {string} value
   */function setElementClassRaw(element,value){// use native setAttribute provided by ShadyDOM when setAttribute is patched
if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}/**
   * @type {function(*):*}
   */const wrap=window.ShadyDOM&&window.ShadyDOM.wrap||(node=>node);/**
                                                                                         * @param {Element | {is: string, extends: string}} element
                                                                                         * @return {{is: string, typeExtension: string}}
                                                                                         */_exports.wrap=wrap;function getIsExtends(element){let localName=element.localName,is="",typeExtension="";/*
                          NOTE: technically, this can be wrong for certain svg elements
                          with `-` in the name like `<font-face>`
                          */if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends}return{is,typeExtension}}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */const styleTextParts=[],styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll("style");for(let i=0;i<styles.length;i++){const style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}/**
   * Split a selector separated by commas into an array in a smart way
   * @param {string} selector
   * @return {!Array<string>}
   */function splitSelectorList(selector){const parts=[];let part="";for(let i=0;0<=i&&i<selector.length;i++){// A selector with parentheses will be one complete part
if("("===selector[i]){// find the matching paren
const end=findMatchingParen(selector,i);// push the paren block into the part
part+=selector.slice(i,end+1);// move the index to after the paren block
i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}// catch any pieces after the last comma
if(part){parts.push(part)}return parts}const CSS_BUILD_ATTR="css-build";/**
                                     * Return the polymer-css-build "build type" applied to this element
                                     *
                                     * @param {!HTMLElement} element
                                     * @return {string} Can be "", "shady", or "shadow"
                                     */function getCssBuild(element){if(cssBuild!==void 0){return(/** @type {string} */cssBuild)}if(element.__cssBuild===void 0){// try attribute first, as it is the common case
const attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{const buildComment=getBuildComment(element);if(""!==buildComment){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return""!==getCssBuild(element)}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){const buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;if(buildComment instanceof Comment){const commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}/**
   * Check if the css build status is optimal, and do no unneeded work.
   *
   * @param {string=} cssBuild CSS build status
   * @return {boolean} css build is optimal or not
   */function isOptimalCssBuild(cssBuild=""){// CSS custom property shim always requires work
if(""===cssBuild||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild:"shady"===cssBuild}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){const buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$styleUtil=styleUtil;"use strict";function updateNativeProperties(element,properties){// remove previous properties
for(let p in properties){// NOTE: for bc with shim, don't apply null values.
if(null===p){element.style.removeProperty(p)}else{element.style.setProperty(p,properties[p])}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function getComputedStyleValue(element,property){/**
   * @const {string}
   */const value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function detectMixin(cssText){const has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:getComputedStyleValue,detectMixin:detectMixin};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
       * The apply shim simulates the behavior of `@apply` proposed at
       * https://tabatkins.github.io/specs/css-apply-rule/.
       * The approach is to convert a property like this:
       *
       *    --foo: {color: red; background: blue;}
       *
       * to this:
       *
       *    --foo_-_color: red;
       *    --foo_-_background: blue;
       *
       * Then where `@apply --foo` is used, that is converted to:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background);
       *
       * This approach generally works but there are some issues and limitations.
       * Consider, for example, that somewhere *between* where `--foo` is set and used,
       * another element sets it to:
       *
       *    --foo: { border: 2px solid red; }
       *
       * We must now ensure that the color and background from the previous setting
       * do not apply. This is accomplished by changing the property set to this:
       *
       *    --foo_-_border: 2px solid red;
       *    --foo_-_color: initial;
       *    --foo_-_background: initial;
       *
       * This works but introduces one new issue.
       * Consider this setup at the point where the `@apply` is used:
       *
       *    background: orange;
       *    `@apply` --foo;
       *
       * In this case the background will be unset (initial) rather than the desired
       * `orange`. We address this by altering the property set to use a fallback
       * value like this:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background, orange);
       *    border: var(--foo_-_border);
       *
       * Note that the default is retained in the property set and the `background` is
       * the desired `orange`. This leads us to a limitation.
       *
       * Limitation 1:
      
       * Only properties in the rule where the `@apply`
       * is used are considered as default values.
       * If another rule matches the element and sets `background` with
       * less specificity than the rule in which `@apply` appears,
       * the `background` will not be set.
       *
       * Limitation 2:
       *
       * When using Polymer's `updateStyles` api, new properties may not be set for
       * `@apply` properties.
      
      */_exports.$commonUtils=commonUtils;"use strict";const APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_";/**
                              * @typedef {!Object<string, string>}
                              */let PropertyEntry,DependantsEntry,MixinMapEntry;// eslint-disable-line no-unused-vars
/**
 * @typedef {!Object<string, boolean>}
 */ // eslint-disable-line no-unused-vars
// map of mixin to property names
// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
class MixinMap{constructor(){/** @type {!Object<string, !MixinMapEntry>} */this._map={}}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */get(name){name=name.trim();return this._map[name]||null}}/**
   * Callback for when an element is marked invalid
   * @type {?function(string)}
   */let invalidCallback=null;/** @unrestricted */class ApplyShim{constructor(){/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */detectMixin(cssText){return detectMixin(cssText)}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */gatherStyles(template){const styleText=gatherStyleText(template.content);if(styleText){const style=/** @type {!HTMLStyleElement} */document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}/** @type {HTMLStyleElement} */const style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */transformStyle(style,elementName=""){let ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */transformCustomStyle(style){let ast=rulesForStyle(style);forEachRule(ast,rule=>{if(":root"===rule.selector){rule.selector="html"}this.transformRule(rule)});style.textContent=toCssText(ast);return ast}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */transformRules(rules,elementName){this._currentElement=elementName;forEachRule(rules,r=>{this.transformRule(r)});this._currentElement=null}/**
     * @param {!StyleNode} rule
     */transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(":root"===rule.selector){rule.selector=":host > *"}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */transformCssText(cssText,rule){// produce variables
cssText=cssText.replace(VAR_ASSIGN,(matchText,propertyName,valueProperty,valueMixin)=>this._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule));// consume mixins
return this._consumeCssProperties(cssText,rule)}/**
     * @param {string} property
     * @return {string}
     */_getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */_fallbacksFromPreviousRules(startRule){// find the "top" rule
let topRule=startRule;while(topRule.parent){topRule=topRule.parent}const fallbacks={};let seenStartRule=!1;forEachRule(topRule,r=>{// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r.selector===startRule.selector){Object.assign(fallbacks,this._cssTextToMap(r.parsedCssText))}});return fallbacks}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */_consumeCssProperties(text,rule){/** @type {Array} */let m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){let matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));let replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text=`${textBeforeApply}${replacement}${textAfterApply}`;// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length}return text}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */_atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");let vars=[],mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}let p,parts,f;const properties=mixinEntry.properties;for(p in properties){f=fallbacks&&fallbacks[p];parts=[p,": var(",mixinName,MIXIN_VAR_SEP,p];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[p])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */_replaceInitialOrInherit(property,value){let match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property)}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value="apply-shim-inherit"}}return value}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @param {boolean=} replaceInitialOrInherit
     * @return {!Object<string, string>}
     */_cssTextToMap(text,replaceInitialOrInherit=!1){let props=text.split(";"),property,value,out={};for(let i=0,p,sp;i<props.length;i++){p=props[i];if(p){sp=p.split(":");// ignore lines that aren't definitions like @media
if(1<sp.length){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}/**
     * @param {MixinMapEntry} mixinEntry
     */_invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(let elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */_produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,(prefix,value)=>{if(value&&this._map.get(value)){valueMixin=`@apply ${value};`}})}if(!valueMixin){return matchText}let mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}let out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push(`${propertyName}${MIXIN_VAR_SEP}${p}: ${v}`)}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix=`${matchText};${prefix}`}return`${prefix}${out.join("; ")};`}}/* exports */ /* eslint-disable no-self-assign */_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;/* eslint-enable no-self-assign */Object.defineProperty(ApplyShim.prototype,"invalidCallback",{/** @return {?function(string)} */get(){return invalidCallback},/** @param {?function(string)} cb */set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShim$1=applyShim;"use strict";/**
               * @const {!Object<string, !HTMLTemplateElement>}
               */const templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$templateMap=templateMap$1;"use strict";/*
               * Utilities for handling invalidating apply-shim mixins for a given template.
               *
               * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
               * The template
               */ /** @const {string} */const CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();/** @const {string} */ /**
                                    * @param {string} elementName
                                    */function invalidate(elementName){let template=templateMap[elementName];if(template){invalidateTemplate(template)}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValid(elementName){let template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValidating(elementName){let template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}/**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */function startValidating(elementName){let template=templateMap[elementName];startValidatingTemplate(template)}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=!0;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}/**
   * @return {boolean}
   */function elementsAreInvalid(){for(let elementName in templateMap){let template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShimUtils=applyShimUtils;"use strict";/** @type {Promise<void>} */let readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;/** @type {?function(?function())} */ /**
                * @param {?function()} callback
                */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(resolve=>{resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",()=>{if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$documentWait=documentWait$1;"use strict";let CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;const SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle";/** @type {?function(!HTMLStyleElement)} */let transformFn=null,validateFn=null;/** @type {?function()} */ /**
                       This interface is provided to add document-level <style> elements to ShadyCSS for processing.
                       These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
                       In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties
                       
                       To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`
                       
                       In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
                       This function will be called when calculating styles.
                       
                       An example usage of the document-level styling api can be found in `examples/document-style-lib.js`
                       
                       @unrestricted
                       */class CustomStyleInterface{constructor(){/** @type {!Array<!CustomStyleProvider>} */this.customStyles=[];this.enqueued=!1;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(()=>{if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}/**
     * Queue a validation for new custom styles to batch style recalculations
     */enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}/**
     * @param {!HTMLStyleElement} style
     */addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}let style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}/**
     * @return {!Array<!CustomStyleProvider>}
     */processStyles(){const cs=this.customStyles;for(let i=0;i<cs.length;i++){const customStyle=cs[i];if(customStyle[CACHED_STYLE]){continue}const style=this.getStyleForCustomStyle(customStyle);if(style){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
const styleToTransform=/** @type {!HTMLStyleElement} */style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}customStyle[CACHED_STYLE]=styleToTransform}}return cs}}/* eslint-disable no-self-assign */_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;/* eslint-enable no-self-assign */Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{/** @return {?function(!HTMLStyleElement)} */get(){return transformFn},/** @param {?function(!HTMLStyleElement)} fn */set(fn){transformFn=fn}},validateCallback:{/** @return {?function()} */get(){return validateFn},/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set(fn){let needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});/** @typedef {{
     * customStyles: !Array<!CustomStyleProvider>,
     * addCustomStyle: function(!CustomStyleProvider),
     * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
     * findStyles: function(),
     * transformCallback: ?function(!HTMLStyleElement),
     * validateCallback: ?function()
     * }}
     */const CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$customStyleInterface=customStyleInterface;"use strict";const applyShim$1=new ApplyShim;class ApplyShimInterface{constructor(){/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}ensure(){if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=style=>{applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{if(this.customStyleInterface.enqueued){this.flushCustomStyles()}})}}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;let ast=applyShim$1.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template._styleAst=ast}flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}let styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(let i=0;i<styles.length;i++){let cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);let shadowChildren=/** @type {!ParentNode} */element.shadowRoot.children||element.shadowRoot.childNodes;for(let i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i])}}else{let children=element.children||element.childNodes;for(let i=0;i<children.length;i++){this.styleSubtree(/** @type {HTMLElement} */children[i])}}}/**
     * @param {HTMLElement} element
     */styleElement(element){this.ensure();let{is}=getIsExtends(element),template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}// update this element instance
let root=element.shadowRoot;if(root){let style=/** @type {HTMLStyleElement} */root.querySelector("style");if(style){// reuse the template's style ast, it has all the original css text
style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}/**
     * @param {Object=} properties
     */styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const applyShimInterface=new ApplyShimInterface;let CustomStyleInterface=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */_exports.$customStyleInterfaceDefault=CustomStyleInterface;window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},/**
     * @param {!HTMLElement} element
     */styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},/**
     * @param {Object=} properties
     */styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(CustomStyleInterface){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface}}window.ShadyCSS.ApplyShim=applyShim$1;class Styling{static get theme(){// language=CSS
return css`

            :host {

                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* https://material.io/design/material-theming/implementing-your-theme.html#color */
                --primary: #ececec;
                --primary-variant: #f4f4f4;
                --on-primary: #212121;

                --secondary: #fbe73a;
                --secondary-variant: #9e7f2b;
                --on-secondary: #000000;

                --accent: #3f83e3;
                --on-accent: #e5e5e5;

                --background: #fff;
                --on-background: #313131;

                --surface: #fff;
                --on-surface: #44484a;
                --separator: #c3c4c3;

                /* Input, Forms, Toast*/
                --error: #C51162;
                --on-error: #ffffff;

                --danger: #FA0202;
                --on-danger: #FAFAFA;

                --success: #129991;
                --on-success: #202124;

                --disabled-color: #B4B5B4;

                /* Spacing */
                --spacing-xxs: 4px;
                --spacing-xs: 8px;
                --spacing-s: 16px;
                --spacing: 24px;
                --spacing-m: 24px;
                --spacing-l: 32px;
                --spacing-xl: 48px;
                --spacing-xxl: 96px;


                /* project specific */
                --blockquote: #ffc247;

            }

            /** the background of the bar itself. **/
            ::-webkit-scrollbar {
                width: 8px;
                background-color: var(--surface, white);
            }

            /** the directional buttons on the scrollbar. **/
            ::-webkit-scrollbar-button {
                background-color: var(--on-surface, black);
            }

            /** the empty space “below” the progress bar. **/
            ::-webkit-scrollbar-track {
            }

            /** the top-most layer of the the progress bar not covered by the thumb. **/
            ::-webkit-scrollbar-track-piece {
            }

            /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
            ::-webkit-scrollbar-thumb {
                background-color: var(--on-surface, black);
                border-radius: 10px;
            }

            /** the bottom corner of the scrollable element, where two scrollbar meet. **/
            ::-webkit-scrollbar-corner {
            }

            /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
            ::-webkit-resizer {
            }

        `}}_exports.Styling=Styling;var styling={Styling:Styling};_exports.$styling=styling;class ViewHome extends FBP(LitElement){constructor(){super()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
            :host {
                display: block;
                height: 100%;
                overflow: auto;
                box-sizing: border-box;
                background-color: var(--background, white);
                color: var(--on-background, black);
            }

            :host([hidden]) {
                display: none;
            }

            .hero-title {
                font-size: 196px;
                font-weight: 300;

                margin: 100px 0 20px 130px;
            }

            .hero-caption {
                max-width: 640px;
                padding-right: 10%;
                line-height: 38px;
                font-size: 28px;
                font-weight: 400;
            }

            .hero-link {
                text-transform: uppercase;
                text-decoration: none;
                line-height: 26px;
                vertical-align: unset;
                display: flex;
                align-content: start;
                font-weight: 500;
                color: var(--accent);
            }

            h1 {
                font-size: 40px;
                line-height: 48px;
                font-weight: normal;
            }

            h1.title {
                max-width: 560px;
                margin-bottom: 20px;
            }

            h2.description {
                margin-top: 20px;
                margin-bottom: 24px;
                max-width: 600px;
                color: var(--accent, var(--on-surface));
                font-weight: normal;
            }

            h1.title:after {
                content: "";
                background-color: var(--on-background);
                height: 1px;
                width: var(--spacing-l);
                display: block;
                margin-top: 8px;
            }

            .caption {
                margin-bottom: -8px;
                max-width: 360px;
                font-weight: normal;
            }

            furo-horizontal-flex[padded] > div {
                padding-right: var(--spacing);
                max-width: 350px;

            }

            .content {
                padding: var(--spacing);
                
            }

            .panel {
                background-color: var(--surface, white);
                color: var(--on-surface, black);
                padding: var(--spacing, 24px);
                margin-right: var(--spacing, 24px);
                margin-bottom: var(--spacing, 24px);
                border-radius: 4px;
            }

            h2.with-footnote {
                margin-bottom: 0;
            }

            a {
                color: var(--accent);
            }
        `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
            <div class="content">
                <p class="hero-title">フロー</p>
                <p class="hero-caption">A enterprise grade and simple framework for creating fast, lightweight web apps
                    with web components</p>
                <a class="hero-link" href="/guide">Get Started</a>

                <h1 class="title">Why use furo?</h1>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>

                        <h2 class="caption">Fully declarative</h2>
                        <p>Express your UI declaratively, as a function of state. No need to learn a custom templating
                            language –
                            you
                            can use the full power of web-components. </p>

                    </div>
                    <div class="panel" flex>

                        <h2 class="caption">Themable</h2>
                        <p>Furo Base Components are themeable. <strong>Material</strong> theme is set as default. You
                            can apply the
                            <strong>Carbon</strong>
                            <small>(comming soon)</small>
                            themeset or even your own.
                        </p>

                    </div>
                    <div class="panel" flex>

                        <h2 class="caption">Styleable</h2>
                        <p>Styling is not the same like themeing. Apply your style set to the theme you use. Styling is
                            done with
                            <strong>--style-vars</strong>. Maybe you want switch your app to <i>dark</i>?</p>

                    </div>
                </furo-horizontal-flex>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>
                        <h2 class="caption">Standards</h2>
                        <p>Furo Base Components rely hardly on web standards as much as possible. This gives you speed,
                            robustness
                            and compatibility</p>
                        <p>You are free to add <strong>shims</strong> or <strong>polyfills</strong> to your application.
                            But do not
                            forget to <strong> "Use the Platform" </strong></p>
                    </div>
                    <div class="panel" flex>
                        <h2 class="caption">Tool Chain</h2>
                        <p>Furo itself uses the <a
                                href="https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli">polymer-cli</a>
                            toolchain by default. </p>
                        <p>If you like <a href="https://webpack.js.org/">webpack</a> or <a href="https://open-wc.org/">open-wc</a>,
                            feel free to change it.</p>
                    </div>

                </furo-horizontal-flex>

                <h1 class="title">APIs and generators</h1>
                <h2 class="description">Furo comes with a strong data API specification</h2>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>
                        <h2 class="caption">Generators</h2>

                        <p>The default generator works fine with <strong>grpc</strong>.</p>
                        <p>Generate the <strong>protos</strong> with the delivered generators and use the backend
                            language you want,
                            like <strong><i>=GO</i></strong> or so. </p>
                    </div>

                    <div class="panel" class="flex">
                        <h2 class="caption">Open Api</h2>
                        <p>You can also generate a swagger documentation if you want.</p>
                        <p>And from there you can generate much more...</p>
                    </div>
                    <div class="panel" class="flex">
                        <h2 class="caption">Data agents</h2>
                        <p>The data fetching agents are working with REST APIs.</p>
                        <p>Swap the existing data fetching agents to one that fits your needs better.</p>
                    </div>
                </furo-horizontal-flex>

                <h1 class="title">Flow Based Programming</h1>
                <h2 class="description">With Furo-fbp, components can be written fully declarative and
                    without any Javascript.</h2>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>
                        <h2 class="caption">Declarative</h2>
                        <p>Furo comes with furo-fbp, a <a href="http://jpaulmorrison.com/fbp/"><strong>F</strong>low
                            <strong>B</strong>ased <strong>P</strong>rogramming</a>
                            language created by <a href="http://jpaulmorrison.com/">J. Paul Rodker Morrison</a>.
                            Components can be
                            written fully declarative and without any code.</p>
                    </div>
                    <div class="panel" flex>
                        <h2 class="caption">Visual</h2>
                        <p></p>
                    </div>
                    <div class="panel" flex>
                        <h2 class="caption">Testable</h2>
                        <p>Components built with furo are trivial to test. Trigger the wires or listen to data on a
                            wire. No monster
                            querySelectors needed.</p>
                    </div>
                </furo-horizontal-flex>


                <h1 class="title">General Compatibility </h1>

                <h2 class="description with-footnote">Furo-fbp has no dependencies and works with LitElement, native
                    web-components or
                    Polymer,...</h2>
                <small>*1</small>

                <h1 class="title">Browser Compatibility</h1>
                <h2 class="description">Furo works in all major browsers (Chrome, Firefox, Edge, Safari, and
                    Opera). </h2>
                <hr>
                <small>[1] furo-fbp has no dependencies, furoBaseComponets relies mostly on LitElement</small>
            </div>
            <footer-bar></footer-bar>
        `}}window.customElements.define("view-home",ViewHome);/**
                                                      * `furo-location`
                                                      *  Somethin like iron-location
                                                      *
                                                      * @customElement
                                                      */ /**
                                                          * @demo demo/location.html
                                                          */class FuroLocation extends HTMLElement{constructor(){super();this.style.display="none";this._location={host:window.location.host};/**
        * A regexp that defines the set of URLs that should be considered part
        * of this web app.
        *
        * Clicking on a link that matches this regex won't result in a full page
        * navigation, but will instead just update the URL state in place.
        *
        * This regexp is given everything after the origin in an absolute
        * URL. So to match just URLs that start with /app/ do:
        *     url-space-regex="^/app/"
        *
        * @type {string|RegExp}
        */this.urlSpaceRegex=this.getAttribute("url-space-regex")||"";/**
                                                                      * If the user was on a URL for less than `dwellTime` milliseconds, it
                                                                      * won't be added to the browser's history, but instead will be replaced
                                                                      * by the next entry.
                                                                      *
                                                                      * This is to prevent large numbers of entries from clogging up the user's
                                                                      * browser history. Disable by setting to a negative number.
                                                                      * @type {number} in milliseconds
                                                                      */this.dwellTime=this.getAttribute("dwell-time")||2e3;this._registerHandler()}/**
     * @private
     */connectedCallback(){document.body.addEventListener("click",this._clickHandler,!0);document.body.addEventListener("__furoLocationChanged",this._locationChangeNotyfier,!0);window.addEventListener("popstate",this._locationChangeNotyfier,!0);window.addEventListener("popstate",this._locationChangeNotyfier,!0);this._lastChangedAt=window.performance.now()-(this.dwellTime-200);// initial notyfier
setTimeout(()=>{this._locationChangeNotyfier({detail:this._lastChangedAt})},0)}/**
     * @private
     */disconnectedCallback(){document.body.removeEventListener("click",this._clickHandler,!0);document.body.removeEventListener("__furoLocationChanged",this._locationChangeNotyfier,!0);window.removeEventListener("popstate",this._locationChangeNotyfier,!0);window.removeEventListener("popstate",this._locationChangeNotyfier,!0)}// create a valid href string from this._location
_getHrefFromLocation(){// path, query hash
let href=this._location.path;if(0<this._location.query.length){href+="?"+this._location.query}if(0<this._location.hash.length){href+="#"+this._location.hash}return href}_registerHandler(){this._locationChangeNotyfier=e=>{this._lastChangedAt=e.detail;// ignore links outside urlSpaceRegex
if(""!==this.urlSpaceRegex){if(null===window.location.pathname.match(this.urlSpaceRegex)){return}}// path-changed
// cut of urlSpaceRegex
let newPath=window.decodeURIComponent(window.location.pathname).replace(new RegExp(this.urlSpaceRegex),"");;if(this._location.path!==newPath){this._location.path=newPath;// path segments
this._location.pathSegments=[];let m,rgx=new RegExp(/\/([^/]*)/gi);while(null!==(m=rgx.exec(newPath))){this._location.pathSegments.push(m[1])}/**
           * @event location-path-changed
           * Fired when Path portion of the location changed
           * detail payload: {string} path
           */let customEvent=new Event("location-path-changed",{composed:!0,bubbles:!1});customEvent.detail=newPath;this.dispatchEvent(customEvent)}// hash-changed
let newHash=window.decodeURIComponent(window.location.hash.slice(1));if(this._location.hashstring!==newHash){this._location.hashstring=newHash;this._location.hash={};if(0<newHash.length){newHash.split("&").forEach(qstr=>{let p=qstr.split("=");this._location.hash[p[0]]=p[1]})}/**
           * @event location-hash-changed
           * Fired when Hash portion of the location changed
           * detail payload: {string} hash
           */let customEvent=new Event("location-hash-changed",{composed:!0,bubbles:!1});customEvent.detail=newHash;this.dispatchEvent(customEvent)}// query-changed
let newQuery=window.location.search.slice(1);if(this._location.querystring!==newQuery){this._location.querystring=newQuery;this._location.query={};if(0<newQuery.length){newQuery.split("&").forEach(qstr=>{let p=qstr.split("=");this._location.query[p[0]]=p[1]})}/**
           * @event location-query-changed
           * Fired when Query portion of the location changed
           * detail payload: {Object} queryParams
           */let customEvent=new Event("location-query-changed",{composed:!0,bubbles:!1});customEvent.detail=this._location.query;this.dispatchEvent(customEvent)}// location-changed
/**
       * @event location-changed
       * Fired when something in the location changed
       * detail payload: {object} location
       */let customEvent=new Event("location-changed",{composed:!0,bubbles:!1});customEvent.detail=this._location;this.dispatchEvent(customEvent)};/**
        * clicks abfangen
        * @param e
        * @private
        */this._clickHandler=e=>{let target=this._findAtagInPath(e.composedPath());// only handle clicks on <a href="..
if("A"!==target.tagName){return}// do not interfere with links to other hosts
if(target.host!==this._location.host){return}// ignore links outside urlSpaceRegex
if(""!==this.urlSpaceRegex){if(null===target.pathname.match(this.urlSpaceRegex)){return}}// update history only once
if(!e.__historyUpdated){e.__historyUpdated=!0;let now=window.performance.now(),shouldReplace=this._lastChangedAt+this.dwellTime>now;this._lastChangedAt=now;if(shouldReplace){window.history.replaceState({},"",target.href)}else{window.history.pushState({},"",target.href)}this._notifyFuroLocationChanged()}// prevent from full reload
e.preventDefault()}}/**
     * look for A tags in a path array from click events
     * @private
     * @param path
     * @return {boolean|*}
     */_findAtagInPath(path){// if we reach body, we are to deep
if("BODY"===path[0].tagName){return!1}if("A"===path[0].tagName){return path[0]}const[head,...tail]=path;return this._findAtagInPath(tail)}/**
     * Internal notyfication
     * @private
     */_notifyFuroLocationChanged(){let now=window.performance.now(),customEvent=new Event("__furoLocationChanged",{composed:!0,bubbles:!0});customEvent.detail=now;this.dispatchEvent(customEvent)}}window.customElements.define("furo-location",FuroLocation);class FuroPages extends LitElement{constructor(){super();this._fallback=this.getAttribute("default");this._default=this.querySelector("*[name="+this._fallback+"]");this._attrForSelected=this.getAttribute("attr-for-selected")||"selected";this._lastQP=[];this._lastHash=[];this._lastPageName="";// set all to hidden
let l=this.children.length-1;for(l;0<=l;l--){this.children[l].setAttribute("hidden","")}}firstUpdated(_changedProperties){super.firstUpdated(_changedProperties);setTimeout(()=>{// Activate Default
if(!this._lastPageName){this.activatePage(this._fallback)}},1)}/**
     * Activate a page by name
     * @param String pageName
     */activatePage(pageName){return this.injectLocation({pathSegments:[pageName]})}/**
     * set location via attribute
     * will forward to ƒ-inject-location
     * @param location
     */set location(location){return this.injectLocation(location)}/**
     * Inject the location Object from furo-location
     *
     * @param location
     */injectLocation(location){let page=location.pathSegments[0]||this._fallback;if(this._lastPage&&page!==this._lastPageName){if(this._lastPage._FBPTriggerWire!==void 0){this._lastPage._FBPTriggerWire("--pageDeActivated")}this._lastPage.setAttribute("hidden","");this._lastPage.removeAttribute(this._attrForSelected)}this._lastPage=this.querySelector("*[name="+page+"]");if(!this._lastPage){// 404
this._lastPage=this.querySelector("*[name=\"404\"]");if(this._lastPage){}else{this._lastPage=this._default}}if(this._lastPage){if(page!==this._lastPageName){this._lastPage.removeAttribute("hidden");this._lastPage.setAttribute(this._attrForSelected,"");this._lastPageName=page;if(this._lastPage._FBPTriggerWire!==void 0){this._lastPage._FBPTriggerWire("--pageActivated",location)}}// QP
if(this._lastQP[page]!==location.querystring){this._lastQP[page]=location.querystring;// fire --pageParamsChanged if we have a fbp component
if(this._lastPage._FBPTriggerWire!==void 0){this._lastPage._FBPTriggerWire("--pageQueryChanged",location)}}// Hash
if(this._lastHash[page]!==location.hashstring){this._lastHash[page]=location.hashstring;// fire --pageParamsChanged if we have a fbp component
if(this._lastPage._FBPTriggerWire!==void 0){this._lastPage._FBPTriggerWire("--pageHashChanged",location)}}return this._lastPage}else{console.warn("default page not found and 404 page not found")}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return css`
        :host {
            display: block;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
      <slot></slot>
    `}}window.customElements.define("furo-pages",FuroPages);function TypeAppFlow(name){this.event=name;this.data={}}/**
   * `furo-app-flow`
   *
   * @customElement
   * @demo demo/furo-app-flow.html
   * @appliesMixin FBP
   */class FuroAppFlow extends LitElement{constructor(){super();this.style.display="none"}static get properties(){return{/**
       * Name of your app-flow event object
       *
       * i.e. 'task-clicked', 'wizard-step1-completed',...
       */event:{type:String}}}setQp(qp){this._qp=qp}static set qp(qp){this._qp=qp}trigger(){this.emit(this._qp)}/**
     * fire the app-flow event
     * @param {object|QueryParams} QueryParam Object
     */emit(queryParams){var data=new TypeAppFlow(this.event);for(let param in queryParams){data.data[param]=queryParams[param]}/**
       * @event app-flow
       *
       * App-flow event with app-flow object will be fired when you trigger the `emit` function.
       * detail payload: data
       */let customEvent=new Event("app-flow",{composed:!0,bubbles:!0});customEvent.detail=data;this.dispatchEvent(customEvent);return customEvent}}window.customElements.define("furo-app-flow",FuroAppFlow);// empty fbp element handler to have fbp scope
class EmptyFBPNode extends FBP(HTMLElement){}window.customElements.define("empty-fbp-node",EmptyFBPNode);class FlowBind extends FBP(HTMLElement){constructor(){super();this.attachShadow({mode:"open"});let t=this.querySelector("template");this.template=t.content;let elem=document.createElement("empty-fbp-node");elem.attachShadow({mode:"open"});elem.shadowRoot.appendChild(this.template.cloneNode(!0));elem._appendFBP(elem.shadowRoot);this._host=elem;this.parentNode.appendChild(elem.shadowRoot)}}window.customElements.define("flow-bind",FlowBind);class MainStage extends FBP(LitElement){constructor(){super()}_FBPReady(){super._FBPReady();/**
                        * Register hook on wire --locationChanged to
                        * Lazy load parts of the page
                        */this._FBPAddWireHook("--locationChanged",e=>{switch(e.pathSegments[0]){case"api":new Promise((res,rej)=>_require.default(["./api/view-api.js"],res,rej)).then(bundle=>bundle&&bundle.$viewApi||{});break;case"guide":new Promise((res,rej)=>_require.default(["./guide/view-guide.js"],res,rej)).then(bundle=>bundle&&bundle.$viewGuide||{});break;}})}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){let theme=Theme.getThemeForComponent(this.name);if(theme){return[theme,Styling.theme]}else{// language=CSS
return[css`
          :host {
              height: 100%;
              display: block;
              margin: 0;
              color: var(--on-primary, #212121);
              background-color: var(--background);
              font-family: "Roboto", "Noto", sans-serif;
              line-height: 1.5;
              overflow-x: hidden;
          }

          furo-vertical-flex {
              height: 100%;
          }

          furo-pages {
              overflow: hidden;
          }

      `,Styling.theme]}}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`

      <furo-vertical-flex>
        <header-toolbar></header-toolbar>

        <furo-pages flex ƒ-inject-location="--locationChanged" default="home">
          <view-home name="home"></view-home>
          <view-guide name="guide"></view-guide>
          <view-api name="api"></view-api>
        </furo-pages>

      </furo-vertical-flex>
      <furo-location @-location-changed="--locationChanged"></furo-location>
    `}}window.customElements.define("main-stage",MainStage);class FuroShell extends FBP(LitElement){/**
   *
   * @private
   * @return {CSSResult}
   */static get styles(){let theme=Theme.getThemeForComponent(this.name);if(theme){return[theme]}else{// language=CSS
return[css`
                :host {
                    display: block;
                    height: 100vh;
                    overflow: hidden;
                }
            `]}}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
            <main-stage></main-stage>
        `}}window.customElements.define("furo-shell",FuroShell);class FlowRepeat extends FBP(HTMLElement){constructor(){super();this.template;this._insertedItems=[]}/**
     * Clear the list
     */clear(){this.injectItems([])}/**
     * Triggers the wire --itemSelected on selected item and --itemDeSelected on last selected Item
     * @param index
     */select(index){if(this._insertedItems[index]){// deselect the last selected
if(this.selectedIndex!==void 0){this.deselect(this.selectedIndex)}this._insertedItems[index].virtualElement._FBPTriggerWire("--itemSelected");this.selectedIndex=index}}/**
     * select Next index
     *
     */selectNextIndex(){let i=this.selectedIndex+1;// loop around
if(!this._insertedItems[i]){i=0}this.select(i)}selectPreviousIndex(){let i=this.selectedIndex-1;// loop around
if(0>i){i=this._insertedItems.length-1}this.select(i)}triggerSelected(data){this.triggerIndex(this.selectedIndex,data)}// trigger all nodes
triggerAll(data){for(let i=0;i<this._insertedItems.length;i++){this.triggerIndex(i,data)}}/**
     * Triggers the wire --itemDeSelected on last selected item
     */deselect(){if(this.selectedIndex!==void 0&&this._insertedItems[this.selectedIndex]){this._insertedItems[this.selectedIndex].virtualElement._FBPTriggerWire("--itemDeSelected");this.selectedIndex=void 0}}_findFirstHost(parent){if(parent&&parent.host){return parent.host}if(null===parent){return null}return this._findFirstHost(parent.parentNode)}injectItems(items){if(!Array.isArray(items)){console.info("Items is not an array ",items,this);// make the list empty
items=[]}this._firstHost=this._findFirstHost(this.parentNode);items.forEach((e,i,a)=>{let identity=!1;if(this.identityPath){identity=this.identityPath.split(".").reduce((acc,part)=>acc&&acc[part],e)}let elem;// wenn das element noch nicht existiert
if(!this._insertedItems[i]){elem=this._buildDomNode(identity,i);elem._FBPTriggerWire("--init",e)}else{// wenn die identität abweicht
if(!this._insertedItems[i].identity||this._insertedItems[i].identity!==identity){elem=this._buildDomNode(identity,i);// Schiebe alle elemente des Knotens vor das erste kind des nächsten möglichen knoten
let reference=this;if(this._insertedItems[i+1]&&this._insertedItems[i+1].children[0]){reference=this._insertedItems[i+1].children[0]}// move the nodes
this._insertedItems[i].children.map(attachedElem=>{this.parentNode.insertBefore(attachedElem,reference)});elem._FBPTriggerWire("--init",e)}else{elem=this._insertedItems[i].virtualElement}}// set item and index value on created element
elem.item=e;elem.index=i;// trigger wires
elem._FBPTriggerWire(this._internalWire,{item:e,index:i});if(0===i){elem._FBPTriggerWire("--firstItem",e)}if(i===a.length-1){elem._FBPTriggerWire("--lastItem",e)}elem._FBPTriggerWire("--item",e);elem._FBPTriggerWire("--host",this._firstHost);elem._FBPTriggerWire("--index",i)});// überzählige elemente aus dem dom entfernen
this._insertedItems.slice(items.length,this._insertedItems.length).map(handle=>{handle.children.map(attachedElem=>{attachedElem.remove()})});// überzählige elemente aus dem array entfernen
this._insertedItems.splice(items.length);if(0<items.length){/**
       * @event items-in-dom
       * Fired when items are attached to the dom
       * detail payload: {Number} Number of items
       */setTimeout(()=>{let customEvent=new Event("items-in-dom",{composed:!0,bubbles:!1});customEvent.detail=items.length;this.dispatchEvent(customEvent)},0)}}_buildDomNode(identity,i){// build hidden elem
let elem;elem=document.createElement("empty-fbp-node");elem.attachShadow({mode:"open"});elem.shadowRoot.appendChild(this.template.cloneNode(!0));elem._appendFBP(elem.shadowRoot);let handle={virtualElement:elem,children:[].slice.call(elem.shadowRoot.children),identity:identity};// remove old entries
if(this._insertedItems[i]){this._insertedItems[i].children.map(attachedElem=>{attachedElem.remove()})}this._insertedItems[i]=handle;this.parentNode.insertBefore(elem.shadowRoot,this);return elem}connectedCallback(){this.style.display="none";// Create a shadow root to the element.
let t=this.querySelector("template");if(t&&t.content){this.template=t.content}/**
       * Identity path of a single item.
       * Use this if you have a field which identifies the item.
       * @type {*string}
       */this.identityPath=this.getAttribute("identity-path")||!1;this._internalWire=this.getAttribute("internal-wire")||"--itemInjected"}triggerFirst(e){if(this._insertedItems[0]){this._insertedItems[0].virtualElement._FBPTriggerWire("--trigger",e);this._insertedItems[0].virtualElement._FBPTriggerWire("--triggerFirst",e)}}triggerLast(e){if(this._insertedItems[this._insertedItems.length-1]){this._insertedItems[this._insertedItems.length-1].virtualElement._FBPTriggerWire("--trigger",e);this._insertedItems[this._insertedItems.length-1].virtualElement._FBPTriggerWire("--triggerLast",e)}}triggerIndex(i,data){if(this._insertedItems[i]){this._insertedItems[i].virtualElement._FBPTriggerWire("--trigger",data);this._insertedItems[i].virtualElement._FBPTriggerWire("--triggerIndex",data)}else{console.warn("Out of index",this)}}}window.customElements.define("flow-repeat",FlowRepeat);class SideNavigationItem extends FBP(LitElement){constructor(){super();this.basePath=this.getAttribute("base-path");//forward click to a
this.addEventListener("click",e=>{this._FBPTriggerWire("--click",e)})}injectItem(item){this.item=item;this.requestUpdate()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: list-item;
            min-height: 40px;
            line-height: 40px;
            margin-bottom: 4px;
            color: var(--on-surface);
            letter-spacing: .01785714em;
            font-size: .875rem;
            font-weight: 500;
            padding: 0 var(--spacing-xs);
            transition: all 0.2s;
        }

        :host([hidden]) {
            display: none;
        }


        :host(:hover) {
            background-color: var(--secondary);
            border-radius: 4px;
            color: var(--on-secondary);
            cursor: pointer;
        }


        a[disabled], a[disabled] li {
            color: var(--disabled-color);
            cursor: not-allowed;
            pointer-events: none;
        }

        a[disabled]:hover, a[disabled] li:hover {
            color: var(--disabled-color);
            background-color: transparent;
            cursor: not-allowed;
        }

        span {
            display: inline-block;

            vertical-align: top;
            width: 176px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        a {
            text-decoration: none;
            outline: none;
        }

        furo-icon {
            margin-right: var(--spacing);
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`        
      
        <a tabindex="-1" href="${this.basePath}${this.item.href}" ƒ-click=":STOP,--click"></a><span>     
<furo-icon icon="${this.item.icon}"></furo-icon>${this.item.label}</span>
    `}}window.customElements.define("side-navigation-item",SideNavigationItem);class SideNavigationGroup extends FBP(LitElement){constructor(){super();this.basePath=this.getAttribute("base-path")}injectItem(group){this.item=group;this._FBPTriggerWire("--items",group.items)}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
            padding-bottom: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        
        div.label {

            position: sticky;
            top:0;
            background-color: var(--surface, white);
            z-index: 1;
            color: var(--on-surface, black);
            letter-spacing: .07272727em;
            font-size: 12px;   
            font-weight: 500;
            text-transform: uppercase;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: var(--spacing-s) 0;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: var(--background, rgba(0, 0, 0, .12);
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
      <div class="label">${this.item.group}</div>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--items">
          <side-navigation-item base-path="${this.basePath}" ƒ-inject-item="--item"></side-navigation-item>
        </template>
      </ul>
       
    `}}window.customElements.define("side-navigation-group",SideNavigationGroup);class SideNavigation extends FBP(LitElement){constructor(){super();this.basePath=this.getAttribute("base-path")}injectNavConfig(items){this._FBPTriggerWire("--groups",items)}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
          :host {
              display: block;
              background-color: var(--surface, white);
              padding: var(--spacing);
          }

      `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return html`
      <template is="flow-repeat" ƒ-inject-items="--groups">
        <side-navigation-group base-path="${this.basePath}" ƒ-inject-item="--item"></side-navigation-group>
      </template>
    `}}window.customElements.define("side-navigation",SideNavigation);class FuroIconWithLabel extends FBP(LitElement){static get properties(){return{icon:{type:String}}}static get styles(){// language=CSS
return[css`
                :host {
                    height: 48px;
                    display: inline-block;
                    width: 7em;
                    margin: 1em 0.5em;
                    text-align: center;
                }

                span{
                    display: block;
                    font-size: 8px;
                }
                
                furo-icon{
                    margin: auto;
                    display: block;
                    
                }

            `]}render(){// language=HTML
return html`
            <furo-icon icon="${this.icon}"></furo-icon>
            <span> ${this.icon} </span>
        `}}window.customElements.define("furo-icon-with-label",FuroIconWithLabel);/*! markdown-it 9.0.1 https://github.com//markdown-it/markdown-it @license MIT */(function(f){if("object"===typeof exports&&"undefined"!==typeof module){module.exports=f()}else if("function"===typeof define&&define.amd){define([],f)}else{var g;if("undefined"!==typeof window){g=window}else if("undefined"!==typeof global){g=global}else if("undefined"!==typeof self){g=self}else{g=this}g.markdownit=f()}})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){// HTML5 entities map: { name -> utf16string }
//
'use strict';/*eslint quotes:0*/module.exports=require("entities/maps/entities.json")},{"entities/maps/entities.json":52}],2:[function(require,module,exports){// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks
'use strict';module.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},{}],3:[function(require,module,exports){// Regexps to match html elements
'use strict';var attr_name="[a-zA-Z_:][a-zA-Z0-9:._-]*",unquoted="[^\"'=<>`\\x00-\\x20]+",single_quoted="'[^']*'",double_quoted="\"[^\"]*\"",attr_value="(?:"+unquoted+"|"+single_quoted+"|"+double_quoted+")",attribute="(?:\\s+"+attr_name+"(?:\\s*=\\s*"+attr_value+")?)",open_tag="<[A-Za-z][A-Za-z0-9\\-]*"+attribute+"*\\s*\\/?>",close_tag="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",comment="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",processing="<[?].*?[?]>",declaration="<![A-Z]+\\s+[^>]*>",cdata="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",HTML_TAG_RE=new RegExp("^(?:"+open_tag+"|"+close_tag+"|"+comment+"|"+processing+"|"+declaration+"|"+cdata+")"),HTML_OPEN_CLOSE_TAG_RE=new RegExp("^(?:"+open_tag+"|"+close_tag+")");module.exports.HTML_TAG_RE=HTML_TAG_RE;module.exports.HTML_OPEN_CLOSE_TAG_RE=HTML_OPEN_CLOSE_TAG_RE},{}],4:[function(require,module,exports){// Utilities
//
'use strict';function _class(obj){return Object.prototype.toString.call(obj)}function isString(obj){return"[object String]"===_class(obj)}var _hasOwnProperty=Object.prototype.hasOwnProperty;function has(object,key){return _hasOwnProperty.call(object,key)}// Merge objects
//
function assign(obj/*from1, from2, from3, ...*/){var sources=Array.prototype.slice.call(arguments,1);sources.forEach(function(source){if(!source){return}if("object"!==typeof source){throw new TypeError(source+"must be object")}Object.keys(source).forEach(function(key){obj[key]=source[key]})});return obj}// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src,pos,newElements){return[].concat(src.slice(0,pos),newElements,src.slice(pos+1))}////////////////////////////////////////////////////////////////////////////////
function isValidEntityCode(c){/*eslint no-bitwise:0*/ // broken sequence
if(55296<=c&&57343>=c){return!1}// never used
if(64976<=c&&65007>=c){return!1}if(65535===(65535&c)||65534===(65535&c)){return!1}// control codes
if(0<=c&&8>=c){return!1}if(11===c){return!1}if(14<=c&&31>=c){return!1}if(127<=c&&159>=c){return!1}// out of range
if(1114111<c){return!1}return!0}function fromCodePoint(c){/*eslint no-bitwise:0*/if(65535<c){c-=65536;var surrogate1=55296+(c>>10),surrogate2=56320+(1023&c);return String.fromCharCode(surrogate1,surrogate2)}return String.fromCharCode(c)}var UNESCAPE_MD_RE=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,ENTITY_RE=/&([a-z#][a-z0-9]{1,31});/gi,UNESCAPE_ALL_RE=new RegExp(UNESCAPE_MD_RE.source+"|"+ENTITY_RE.source,"gi"),DIGITAL_ENTITY_TEST_RE=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,entities=require("./entities");function replaceEntityPattern(match,name){var code=0;if(has(entities,name)){return entities[name]}if(35===name.charCodeAt(0)/* # */&&DIGITAL_ENTITY_TEST_RE.test(name)){code="x"===name[1].toLowerCase()?parseInt(name.slice(2),16):parseInt(name.slice(1),10);if(isValidEntityCode(code)){return fromCodePoint(code)}}return match}/*function replaceEntities(str) {
          if (str.indexOf('&') < 0) { return str; }
        
          return str.replace(ENTITY_RE, replaceEntityPattern);
        }*/function unescapeMd(str){if(0>str.indexOf("\\")){return str}return str.replace(UNESCAPE_MD_RE,"$1")}function unescapeAll(str){if(0>str.indexOf("\\")&&0>str.indexOf("&")){return str}return str.replace(UNESCAPE_ALL_RE,function(match,escaped,entity){if(escaped){return escaped}return replaceEntityPattern(match,entity)})}////////////////////////////////////////////////////////////////////////////////
var HTML_ESCAPE_TEST_RE=/[&<>"]/,HTML_ESCAPE_REPLACE_RE=/[&<>"]/g,HTML_REPLACEMENTS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function replaceUnsafeChar(ch){return HTML_REPLACEMENTS[ch]}function escapeHtml(str){if(HTML_ESCAPE_TEST_RE.test(str)){return str.replace(HTML_ESCAPE_REPLACE_RE,replaceUnsafeChar)}return str}////////////////////////////////////////////////////////////////////////////////
var REGEXP_ESCAPE_RE=/[.?*+^$[\]\\(){}|-]/g;function escapeRE(str){return str.replace(REGEXP_ESCAPE_RE,"\\$&")}////////////////////////////////////////////////////////////////////////////////
function isSpace(code){switch(code){case 9:case 32:return!0;}return!1}// Zs (unicode class) || [\t\f\v\r\n]
function isWhiteSpace(code){if(8192<=code&&8202>=code){return!0}switch(code){case 9:// \t
case 10:// \n
case 11:// \v
case 12:// \f
case 13:// \r
case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0;}return!1}////////////////////////////////////////////////////////////////////////////////
/*eslint-disable max-len*/var UNICODE_PUNCT_RE=require("uc.micro/categories/P/regex");// Currently without astral characters support.
function isPunctChar(ch){return UNICODE_PUNCT_RE.test(ch)}// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch){switch(ch){case 33/* ! */:case 34/* " */:case 35/* # */:case 36/* $ */:case 37/* % */:case 38/* & */:case 39/* ' */:case 40/* ( */:case 41/* ) */:case 42/* * */:case 43/* + */:case 44/* , */:case 45/* - */:case 46/* . */:case 47/* / */:case 58/* : */:case 59/* ; */:case 60/* < */:case 61/* = */:case 62/* > */:case 63/* ? */:case 64/* @ */:case 91/* [ */:case 92/* \ */:case 93/* ] */:case 94/* ^ */:case 95/* _ */:case 96/* ` */:case 123/* { */:case 124/* | */:case 125/* } */:case 126/* ~ */:return!0;default:return!1;}}// Hepler to unify [reference labels].
//
function normalizeReference(str){// Trim and collapse whitespace
//
str=str.trim().replace(/\s+/g," ");// In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
// fixed in v12 (couldn't find any details).
//
// So treat this one as a special case
// (remove this when node v10 is no longer supported).
//
if("\u1E7E"==="\u1E9E".toLowerCase()){str=str.replace(/ẞ/g,"\xDF")}// .toLowerCase().toUpperCase() should get rid of all differences
// between letter variants.
//
// Simple .toLowerCase() doesn't normalize 125 code points correctly,
// and .toUpperCase doesn't normalize 6 of them (list of exceptions:
// İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
// uppercased versions).
//
// Here's an example showing how it happens. Lets take greek letter omega:
// uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
//
// Unicode entries:
// 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
// 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
// 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
// 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
//
// Case-insensitive comparison should treat all of them as equivalent.
//
// But .toLowerCase() doesn't change ϑ (it's already lowercase),
// and .toUpperCase() doesn't change ϴ (already uppercase).
//
// Applying first lower then upper case normalizes any character:
// '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
//
// Note: this is equivalent to unicode case folding; unicode normalization
// is a different step that is not required here.
//
// Final result should be uppercased, because it's later stored in an object
// (this avoid a conflict with Object.prototype members,
// most notably, `__proto__`)
//
return str.toLowerCase().toUpperCase()}////////////////////////////////////////////////////////////////////////////////
// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
exports.lib={};exports.lib.mdurl=require("mdurl");exports.lib.ucmicro=require("uc.micro");exports.assign=assign;exports.isString=isString;exports.has=has;exports.unescapeMd=unescapeMd;exports.unescapeAll=unescapeAll;exports.isValidEntityCode=isValidEntityCode;exports.fromCodePoint=fromCodePoint;// exports.replaceEntities     = replaceEntities;
exports.escapeHtml=escapeHtml;exports.arrayReplaceAt=arrayReplaceAt;exports.isSpace=isSpace;exports.isWhiteSpace=isWhiteSpace;exports.isMdAsciiPunct=isMdAsciiPunct;exports.isPunctChar=isPunctChar;exports.escapeRE=escapeRE;exports.normalizeReference=normalizeReference},{"./entities":1,mdurl:58,"uc.micro":65,"uc.micro/categories/P/regex":63}],5:[function(require,module,exports){// Just a shortcut for bulk export
'use strict';exports.parseLinkLabel=require("./parse_link_label");exports.parseLinkDestination=require("./parse_link_destination");exports.parseLinkTitle=require("./parse_link_title")},{"./parse_link_destination":6,"./parse_link_label":7,"./parse_link_title":8}],6:[function(require,module,exports){// Parse link destination
//
'use strict';var unescapeAll=require("../common/utils").unescapeAll;module.exports=function parseLinkDestination(str,pos,max){var code,level,lines=0,start=pos,result={ok:!1,pos:0,lines:0,str:""};if(60===str.charCodeAt(pos)/* < */){pos++;while(pos<max){code=str.charCodeAt(pos);if(10===code/* \n */){return result}if(62===code/* > */){result.pos=pos+1;result.str=unescapeAll(str.slice(start+1,pos));result.ok=!0;return result}if(92===code/* \ */&&pos+1<max){pos+=2;continue}pos++}// no closing '>'
return result}// this should be ... } else { ... branch
level=0;while(pos<max){code=str.charCodeAt(pos);if(32===code){break}// ascii control characters
if(32>code||127===code){break}if(92===code/* \ */&&pos+1<max){pos+=2;continue}if(40===code/* ( */){level++}if(41===code/* ) */){if(0===level){break}level--}pos++}if(start===pos){return result}if(0!==level){return result}result.str=unescapeAll(str.slice(start,pos));result.lines=lines;result.pos=pos;result.ok=!0;return result}},{"../common/utils":4}],7:[function(require,module,exports){// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//
'use strict';module.exports=function parseLinkLabel(state,start,disableNested){var level,found,marker,prevPos,labelEnd=-1,max=state.posMax,oldPos=state.pos;state.pos=start+1;level=1;while(state.pos<max){marker=state.src.charCodeAt(state.pos);if(93===marker/* ] */){level--;if(0===level){found=!0;break}}prevPos=state.pos;state.md.inline.skipToken(state);if(91===marker/* [ */){if(prevPos===state.pos-1){// increase level if we find text `[`, which is not a part of any token
level++}else if(disableNested){state.pos=oldPos;return-1}}}if(found){labelEnd=state.pos}// restore old state
state.pos=oldPos;return labelEnd}},{}],8:[function(require,module,exports){// Parse link title
//
'use strict';var unescapeAll=require("../common/utils").unescapeAll;module.exports=function parseLinkTitle(str,pos,max){var code,marker,lines=0,start=pos,result={ok:!1,pos:0,lines:0,str:""};if(pos>=max){return result}marker=str.charCodeAt(pos);if(34!==marker/* " */&&39!==marker/* ' */&&40!==marker/* ( */){return result}pos++;// if opening marker is "(", switch it to closing marker ")"
if(40===marker){marker=41}while(pos<max){code=str.charCodeAt(pos);if(code===marker){result.pos=pos+1;result.lines=lines;result.str=unescapeAll(str.slice(start+1,pos));result.ok=!0;return result}else if(10===code){lines++}else if(92===code/* \ */&&pos+1<max){pos++;if(10===str.charCodeAt(pos)){lines++}}pos++}return result}},{"../common/utils":4}],9:[function(require,module,exports){// Main parser class
'use strict';var utils=require("./common/utils"),helpers=require("./helpers"),Renderer=require("./renderer"),ParserCore=require("./parser_core"),ParserBlock=require("./parser_block"),ParserInline=require("./parser_inline"),LinkifyIt=require("linkify-it"),mdurl=require("mdurl"),punycode=require("punycode"),config={default:require("./presets/default"),zero:require("./presets/zero"),commonmark:require("./presets/commonmark")},BAD_PROTO_RE=/^(vbscript|javascript|file|data):/,GOOD_DATA_RE=/^data:image\/(gif|png|jpeg|webp);/;function validateLink(url){// url should be normalized at this point, and existing entities are decoded
var str=url.trim().toLowerCase();return BAD_PROTO_RE.test(str)?GOOD_DATA_RE.test(str)?!0:!1:!0}////////////////////////////////////////////////////////////////////////////////
var RECODE_HOSTNAME_FOR=["http:","https:","mailto:"];function normalizeLink(url){var parsed=mdurl.parse(url,!0);if(parsed.hostname){// Encode hostnames in urls like:
// `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
//
// We don't encode unknown schemas, because it's likely that we encode
// something we shouldn't (e.g. `skype:name` treated as `skype:host`)
//
if(!parsed.protocol||0<=RECODE_HOSTNAME_FOR.indexOf(parsed.protocol)){try{parsed.hostname=punycode.toASCII(parsed.hostname)}catch(er){/**/}}}return mdurl.encode(mdurl.format(parsed))}function normalizeLinkText(url){var parsed=mdurl.parse(url,!0);if(parsed.hostname){// Encode hostnames in urls like:
// `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
//
// We don't encode unknown schemas, because it's likely that we encode
// something we shouldn't (e.g. `skype:name` treated as `skype:host`)
//
if(!parsed.protocol||0<=RECODE_HOSTNAME_FOR.indexOf(parsed.protocol)){try{parsed.hostname=punycode.toUnicode(parsed.hostname)}catch(er){/**/}}}return mdurl.decode(mdurl.format(parsed))}/**
         * class MarkdownIt
         *
         * Main parser/renderer class.
         *
         * ##### Usage
         *
         * ```javascript
         * // node.js, "classic" way:
         * var MarkdownIt = require('markdown-it'),
         *     md = new MarkdownIt();
         * var result = md.render('# markdown-it rulezz!');
         *
         * // node.js, the same, but with sugar:
         * var md = require('markdown-it')();
         * var result = md.render('# markdown-it rulezz!');
         *
         * // browser without AMD, added to "window" on script load
         * // Note, there are no dash.
         * var md = window.markdownit();
         * var result = md.render('# markdown-it rulezz!');
         * ```
         *
         * Single line rendering, without paragraph wrap:
         *
         * ```javascript
         * var md = require('markdown-it')();
         * var result = md.renderInline('__markdown-it__ rulezz!');
         * ```
         **/ /**
              * new MarkdownIt([presetName, options])
              * - presetName (String): optional, `commonmark` / `zero`
              * - options (Object)
              *
              * Creates parser instanse with given config. Can be called without `new`.
              *
              * ##### presetName
              *
              * MarkdownIt provides named presets as a convenience to quickly
              * enable/disable active syntax rules and options for common use cases.
              *
              * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
              *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
              * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
              *   similar to GFM, used when no preset name given. Enables all available rules,
              *   but still without html, typographer & autolinker.
              * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
              *   all rules disabled. Useful to quickly setup your config via `.enable()`.
              *   For example, when you need only `bold` and `italic` markup and nothing else.
              *
              * ##### options:
              *
              * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
              *   That's not safe! You may need external sanitizer to protect output from XSS.
              *   It's better to extend features via plugins, instead of enabling HTML.
              * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
              *   (`<br />`). This is needed only for full CommonMark compatibility. In real
              *   world you will need HTML output.
              * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
              * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
              *   Can be useful for external highlighters.
              * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
              * - __typographer__  - `false`. Set `true` to enable [some language-neutral
              *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
              *   quotes beautification (smartquotes).
              * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
              *   pairs, when typographer enabled and smartquotes on. For example, you can
              *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
              *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
              * - __highlight__ - `null`. Highlighter function for fenced code blocks.
              *   Highlighter `function (str, lang)` should return escaped HTML. It can also
              *   return empty string if the source was not changed and should be escaped
              *   externaly. If result starts with <pre... internal wrapper is skipped.
              *
              * ##### Example
              *
              * ```javascript
              * // commonmark mode
              * var md = require('markdown-it')('commonmark');
              *
              * // default mode
              * var md = require('markdown-it')();
              *
              * // enable everything
              * var md = require('markdown-it')({
              *   html: true,
              *   linkify: true,
              *   typographer: true
              * });
              * ```
              *
              * ##### Syntax highlighting
              *
              * ```js
              * var hljs = require('highlight.js') // https://highlightjs.org/
              *
              * var md = require('markdown-it')({
              *   highlight: function (str, lang) {
              *     if (lang && hljs.getLanguage(lang)) {
              *       try {
              *         return hljs.highlight(lang, str, true).value;
              *       } catch (__) {}
              *     }
              *
              *     return ''; // use external default escaping
              *   }
              * });
              * ```
              *
              * Or with full wrapper override (if you need assign class to `<pre>`):
              *
              * ```javascript
              * var hljs = require('highlight.js') // https://highlightjs.org/
              *
              * // Actual default values
              * var md = require('markdown-it')({
              *   highlight: function (str, lang) {
              *     if (lang && hljs.getLanguage(lang)) {
              *       try {
              *         return '<pre class="hljs"><code>' +
              *                hljs.highlight(lang, str, true).value +
              *                '</code></pre>';
              *       } catch (__) {}
              *     }
              *
              *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
              *   }
              * });
              * ```
              *
              **/function MarkdownIt(presetName,options){if(!(this instanceof MarkdownIt)){return new MarkdownIt(presetName,options)}if(!options){if(!utils.isString(presetName)){options=presetName||{};presetName="default"}}/**
           * MarkdownIt#inline -> ParserInline
           *
           * Instance of [[ParserInline]]. You may need it to add new rules when
           * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
           * [[MarkdownIt.enable]].
           **/this.inline=new ParserInline;/**
                                           * MarkdownIt#block -> ParserBlock
                                           *
                                           * Instance of [[ParserBlock]]. You may need it to add new rules when
                                           * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
                                           * [[MarkdownIt.enable]].
                                           **/this.block=new ParserBlock;/**
                                         * MarkdownIt#core -> Core
                                         *
                                         * Instance of [[Core]] chain executor. You may need it to add new rules when
                                         * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
                                         * [[MarkdownIt.enable]].
                                         **/this.core=new ParserCore;/**
                                       * MarkdownIt#renderer -> Renderer
                                       *
                                       * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
                                       * rules for new token types, generated by plugins.
                                       *
                                       * ##### Example
                                       *
                                       * ```javascript
                                       * var md = require('markdown-it')();
                                       *
                                       * function myToken(tokens, idx, options, env, self) {
                                       *   //...
                                       *   return result;
                                       * };
                                       *
                                       * md.renderer.rules['my_token'] = myToken
                                       * ```
                                       *
                                       * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
                                       **/this.renderer=new Renderer;/**
                                         * MarkdownIt#linkify -> LinkifyIt
                                         *
                                         * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
                                         * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
                                         * rule.
                                         **/this.linkify=new LinkifyIt;/**
                                         * MarkdownIt#validateLink(url) -> Boolean
                                         *
                                         * Link validation function. CommonMark allows too much in links. By default
                                         * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
                                         * except some embedded image types.
                                         *
                                         * You can change this behaviour:
                                         *
                                         * ```javascript
                                         * var md = require('markdown-it')();
                                         * // enable everything
                                         * md.validateLink = function () { return true; }
                                         * ```
                                         **/this.validateLink=validateLink;/**
                                           * MarkdownIt#normalizeLink(url) -> String
                                           *
                                           * Function used to encode link url to a machine-readable format,
                                           * which includes url-encoding, punycode, etc.
                                           **/this.normalizeLink=normalizeLink;/**
                                             * MarkdownIt#normalizeLinkText(url) -> String
                                             *
                                             * Function used to decode link url to a human-readable format`
                                             **/this.normalizeLinkText=normalizeLinkText;// Expose utils & helpers for easy acces from plugins
/**
         * MarkdownIt#utils -> utils
         *
         * Assorted utility functions, useful to write plugins. See details
         * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
         **/this.utils=utils;/**
                             * MarkdownIt#helpers -> helpers
                             *
                             * Link components parser functions, useful to write plugins. See details
                             * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
                             **/this.helpers=utils.assign({},helpers);this.options={};this.configure(presetName);if(options){this.set(options)}}/** chainable
         * MarkdownIt.set(options)
         *
         * Set parser options (in the same format as in constructor). Probably, you
         * will never need it, but you can change options after constructor call.
         *
         * ##### Example
         *
         * ```javascript
         * var md = require('markdown-it')()
         *             .set({ html: true, breaks: true })
         *             .set({ typographer, true });
         * ```
         *
         * __Note:__ To achieve the best possible performance, don't modify a
         * `markdown-it` instance options on the fly. If you need multiple configurations
         * it's best to create multiple instances and initialize each with separate
         * config.
         **/MarkdownIt.prototype.set=function(options){utils.assign(this.options,options);return this};/** chainable, internal
          * MarkdownIt.configure(presets)
          *
          * Batch load of all options and compenent settings. This is internal method,
          * and you probably will not need it. But if you with - see available presets
          * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
          *
          * We strongly recommend to use presets instead of direct config loads. That
          * will give better compatibility with next versions.
          **/MarkdownIt.prototype.configure=function(presets){var self=this,presetName;if(utils.isString(presets)){presetName=presets;presets=config[presetName];if(!presets){throw new Error("Wrong `markdown-it` preset \""+presetName+"\", check name")}}if(!presets){throw new Error("Wrong `markdown-it` preset, can't be empty")}if(presets.options){self.set(presets.options)}if(presets.components){Object.keys(presets.components).forEach(function(name){if(presets.components[name].rules){self[name].ruler.enableOnly(presets.components[name].rules)}if(presets.components[name].rules2){self[name].ruler2.enableOnly(presets.components[name].rules2)}})}return this};/** chainable
          * MarkdownIt.enable(list, ignoreInvalid)
          * - list (String|Array): rule name or list of rule names to enable
          * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
          *
          * Enable list or rules. It will automatically find appropriate components,
          * containing rules with given names. If rule not found, and `ignoreInvalid`
          * not set - throws exception.
          *
          * ##### Example
          *
          * ```javascript
          * var md = require('markdown-it')()
          *             .enable(['sub', 'sup'])
          *             .disable('smartquotes');
          * ```
          **/MarkdownIt.prototype.enable=function(list,ignoreInvalid){var result=[];if(!Array.isArray(list)){list=[list]}["core","block","inline"].forEach(function(chain){result=result.concat(this[chain].ruler.enable(list,!0))},this);result=result.concat(this.inline.ruler2.enable(list,!0));var missed=list.filter(function(name){return 0>result.indexOf(name)});if(missed.length&&!ignoreInvalid){throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+missed)}return this};/** chainable
          * MarkdownIt.disable(list, ignoreInvalid)
          * - list (String|Array): rule name or list of rule names to disable.
          * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
          *
          * The same as [[MarkdownIt.enable]], but turn specified rules off.
          **/MarkdownIt.prototype.disable=function(list,ignoreInvalid){var result=[];if(!Array.isArray(list)){list=[list]}["core","block","inline"].forEach(function(chain){result=result.concat(this[chain].ruler.disable(list,!0))},this);result=result.concat(this.inline.ruler2.disable(list,!0));var missed=list.filter(function(name){return 0>result.indexOf(name)});if(missed.length&&!ignoreInvalid){throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+missed)}return this};/** chainable
          * MarkdownIt.use(plugin, params)
          *
          * Load specified plugin with given params into current parser instance.
          * It's just a sugar to call `plugin(md, params)` with curring.
          *
          * ##### Example
          *
          * ```javascript
          * var iterator = require('markdown-it-for-inline');
          * var md = require('markdown-it')()
          *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
          *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
          *             });
          * ```
          **/MarkdownIt.prototype.use=function(plugin/*, params, ... */){var args=[this].concat(Array.prototype.slice.call(arguments,1));plugin.apply(plugin,args);return this};/** internal
          * MarkdownIt.parse(src, env) -> Array
          * - src (String): source string
          * - env (Object): environment sandbox
          *
          * Parse input string and returns list of block tokens (special token type
          * "inline" will contain list of inline tokens). You should not call this
          * method directly, until you write custom renderer (for example, to produce
          * AST).
          *
          * `env` is used to pass data between "distributed" rules and return additional
          * metadata like reference info, needed for the renderer. It also can be used to
          * inject data in specific cases. Usually, you will be ok to pass `{}`,
          * and then pass updated object to renderer.
          **/MarkdownIt.prototype.parse=function(src,env){if("string"!==typeof src){throw new Error("Input data should be a String")}var state=new this.core.State(src,this,env);this.core.process(state);return state.tokens};/**
          * MarkdownIt.render(src [, env]) -> String
          * - src (String): source string
          * - env (Object): environment sandbox
          *
          * Render markdown string into html. It does all magic for you :).
          *
          * `env` can be used to inject additional metadata (`{}` by default).
          * But you will not need it with high probability. See also comment
          * in [[MarkdownIt.parse]].
          **/MarkdownIt.prototype.render=function(src,env){env=env||{};return this.renderer.render(this.parse(src,env),this.options,env)};/** internal
          * MarkdownIt.parseInline(src, env) -> Array
          * - src (String): source string
          * - env (Object): environment sandbox
          *
          * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
          * block tokens list with the single `inline` element, containing parsed inline
          * tokens in `children` property. Also updates `env` object.
          **/MarkdownIt.prototype.parseInline=function(src,env){var state=new this.core.State(src,this,env);state.inlineMode=!0;this.core.process(state);return state.tokens};/**
          * MarkdownIt.renderInline(src [, env]) -> String
          * - src (String): source string
          * - env (Object): environment sandbox
          *
          * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
          * will NOT be wrapped into `<p>` tags.
          **/MarkdownIt.prototype.renderInline=function(src,env){env=env||{};return this.renderer.render(this.parseInline(src,env),this.options,env)};module.exports=MarkdownIt},{"./common/utils":4,"./helpers":5,"./parser_block":10,"./parser_core":11,"./parser_inline":12,"./presets/commonmark":13,"./presets/default":14,"./presets/zero":15,"./renderer":16,"linkify-it":53,mdurl:58,punycode:60}],10:[function(require,module,exports){/** internal
       * class ParserBlock
       *
       * Block-level tokenizer.
       **/'use strict';var Ruler=require("./ruler"),_rules=[// First 2 params - rule name & source. Secondary array - list of rules,
// which can be terminated by this one.
["table",require("./rules_block/table"),["paragraph","reference"]],["code",require("./rules_block/code")],["fence",require("./rules_block/fence"),["paragraph","reference","blockquote","list"]],["blockquote",require("./rules_block/blockquote"),["paragraph","reference","blockquote","list"]],["hr",require("./rules_block/hr"),["paragraph","reference","blockquote","list"]],["list",require("./rules_block/list"),["paragraph","reference","blockquote"]],["reference",require("./rules_block/reference")],["heading",require("./rules_block/heading"),["paragraph","reference","blockquote"]],["lheading",require("./rules_block/lheading")],["html_block",require("./rules_block/html_block"),["paragraph","reference","blockquote"]],["paragraph",require("./rules_block/paragraph")]];/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * new ParserBlock()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **/function ParserBlock(){/**
         * ParserBlock#ruler -> Ruler
         *
         * [[Ruler]] instance. Keep configuration of block rules.
         **/this.ruler=new Ruler;for(var i=0;i<_rules.length;i++){this.ruler.push(_rules[i][0],_rules[i][1],{alt:(_rules[i][2]||[]).slice()})}}// Generate tokens for input range
//
ParserBlock.prototype.tokenize=function(state,startLine,endLine){var ok,i,rules=this.ruler.getRules(""),len=rules.length,line=startLine,hasEmptyLines=!1,maxNesting=state.md.options.maxNesting;while(line<endLine){state.line=line=state.skipEmptyLines(line);if(line>=endLine){break}// Termination condition for nested calls.
// Nested calls currently used for blockquotes & lists
if(state.sCount[line]<state.blkIndent){break}// If nesting level exceeded - skip tail to the end. That's not ordinary
// situation and we should not care about content.
if(state.level>=maxNesting){state.line=endLine;break}// Try all possible rules.
// On success, rule should:
//
// - update `state.line`
// - update `state.tokens`
// - return true
for(i=0;i<len;i++){ok=rules[i](state,line,endLine,!1);if(ok){break}}// set state.tight if we had an empty line before current tag
// i.e. latest empty line should not count
state.tight=!hasEmptyLines;// paragraph might "eat" one newline after it in nested lists
if(state.isEmpty(state.line-1)){hasEmptyLines=!0}line=state.line;if(line<endLine&&state.isEmpty(line)){hasEmptyLines=!0;line++;state.line=line}}};/**
          * ParserBlock.parse(str, md, env, outTokens)
          *
          * Process input string and push block tokens into `outTokens`
          **/ParserBlock.prototype.parse=function(src,md,env,outTokens){var state;if(!src){return}state=new this.State(src,md,env,outTokens);this.tokenize(state,state.line,state.lineMax)};ParserBlock.prototype.State=require("./rules_block/state_block");module.exports=ParserBlock},{"./ruler":17,"./rules_block/blockquote":18,"./rules_block/code":19,"./rules_block/fence":20,"./rules_block/heading":21,"./rules_block/hr":22,"./rules_block/html_block":23,"./rules_block/lheading":24,"./rules_block/list":25,"./rules_block/paragraph":26,"./rules_block/reference":27,"./rules_block/state_block":28,"./rules_block/table":29}],11:[function(require,module,exports){/** internal
       * class Core
       *
       * Top-level rules executor. Glues block/inline parsers and does intermediate
       * transformations.
       **/'use strict';var Ruler=require("./ruler"),_rules=[["normalize",require("./rules_core/normalize")],["block",require("./rules_core/block")],["inline",require("./rules_core/inline")],["linkify",require("./rules_core/linkify")],["replacements",require("./rules_core/replacements")],["smartquotes",require("./rules_core/smartquotes")]];/**
                                                                                                                                                                                                                                                                                                                          * new Core()
                                                                                                                                                                                                                                                                                                                          **/function Core(){/**
         * Core#ruler -> Ruler
         *
         * [[Ruler]] instance. Keep configuration of core rules.
         **/this.ruler=new Ruler;for(var i=0;i<_rules.length;i++){this.ruler.push(_rules[i][0],_rules[i][1])}}/**
         * Core.process(state)
         *
         * Executes core chain rules.
         **/Core.prototype.process=function(state){var i,l,rules;rules=this.ruler.getRules("");for(i=0,l=rules.length;i<l;i++){rules[i](state)}};Core.prototype.State=require("./rules_core/state_core");module.exports=Core},{"./ruler":17,"./rules_core/block":30,"./rules_core/inline":31,"./rules_core/linkify":32,"./rules_core/normalize":33,"./rules_core/replacements":34,"./rules_core/smartquotes":35,"./rules_core/state_core":36}],12:[function(require,module,exports){/** internal
       * class ParserInline
       *
       * Tokenizes paragraph content.
       **/'use strict';var Ruler=require("./ruler"),_rules=[["text",require("./rules_inline/text")],["newline",require("./rules_inline/newline")],["escape",require("./rules_inline/escape")],["backticks",require("./rules_inline/backticks")],["strikethrough",require("./rules_inline/strikethrough").tokenize],["emphasis",require("./rules_inline/emphasis").tokenize],["link",require("./rules_inline/link")],["image",require("./rules_inline/image")],["autolink",require("./rules_inline/autolink")],["html_inline",require("./rules_inline/html_inline")],["entity",require("./rules_inline/entity")]],_rules2=[["balance_pairs",require("./rules_inline/balance_pairs")],["strikethrough",require("./rules_inline/strikethrough").postProcess],["emphasis",require("./rules_inline/emphasis").postProcess],["text_collapse",require("./rules_inline/text_collapse")]];////////////////////////////////////////////////////////////////////////////////
// Parser rules
/**
                                                                                                                                                                                                                                                                                     * new ParserInline()
                                                                                                                                                                                                                                                                                     **/function ParserInline(){var i;/**
                * ParserInline#ruler -> Ruler
                *
                * [[Ruler]] instance. Keep configuration of inline rules.
                **/this.ruler=new Ruler;for(i=0;i<_rules.length;i++){this.ruler.push(_rules[i][0],_rules[i][1])}/**
           * ParserInline#ruler2 -> Ruler
           *
           * [[Ruler]] instance. Second ruler used for post-processing
           * (e.g. in emphasis-like rules).
           **/this.ruler2=new Ruler;for(i=0;i<_rules2.length;i++){this.ruler2.push(_rules2[i][0],_rules2[i][1])}}// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken=function(state){var ok,i,pos=state.pos,rules=this.ruler.getRules(""),len=rules.length,maxNesting=state.md.options.maxNesting,cache=state.cache;if("undefined"!==typeof cache[pos]){state.pos=cache[pos];return}if(state.level<maxNesting){for(i=0;i<len;i++){// Increment state.level and decrement it later to limit recursion.
// It's harmless to do here, because no tokens are created. But ideally,
// we'd need a separate private state variable for this purpose.
//
state.level++;ok=rules[i](state,!0);state.level--;if(ok){break}}}else{// Too much nesting, just skip until the end of the paragraph.
//
// NOTE: this will cause links to behave incorrectly in the following case,
//       when an amount of `[` is exactly equal to `maxNesting + 1`:
//
//       [[[[[[[[[[[[[[[[[[[[[foo]()
//
// TODO: remove this workaround when CM standard will allow nested links
//       (we can replace it by preventing links from being parsed in
//       validation mode)
//
state.pos=state.posMax}if(!ok){state.pos++}cache[pos]=state.pos};// Generate tokens for input range
//
ParserInline.prototype.tokenize=function(state){var ok,i,rules=this.ruler.getRules(""),len=rules.length,end=state.posMax,maxNesting=state.md.options.maxNesting;while(state.pos<end){// Try all possible rules.
// On success, rule should:
//
// - update `state.pos`
// - update `state.tokens`
// - return true
if(state.level<maxNesting){for(i=0;i<len;i++){ok=rules[i](state,!1);if(ok){break}}}if(ok){if(state.pos>=end){break}continue}state.pending+=state.src[state.pos++]}if(state.pending){state.pushPending()}};/**
          * ParserInline.parse(str, md, env, outTokens)
          *
          * Process input string and push inline tokens into `outTokens`
          **/ParserInline.prototype.parse=function(str,md,env,outTokens){var i,rules,len,state=new this.State(str,md,env,outTokens);this.tokenize(state);rules=this.ruler2.getRules("");len=rules.length;for(i=0;i<len;i++){rules[i](state)}};ParserInline.prototype.State=require("./rules_inline/state_inline");module.exports=ParserInline},{"./ruler":17,"./rules_inline/autolink":37,"./rules_inline/backticks":38,"./rules_inline/balance_pairs":39,"./rules_inline/emphasis":40,"./rules_inline/entity":41,"./rules_inline/escape":42,"./rules_inline/html_inline":43,"./rules_inline/image":44,"./rules_inline/link":45,"./rules_inline/newline":46,"./rules_inline/state_inline":47,"./rules_inline/strikethrough":48,"./rules_inline/text":49,"./rules_inline/text_collapse":50}],13:[function(require,module,exports){// Commonmark default options
'use strict';module.exports={options:{html:!0,// Enable HTML tags in source
xhtmlOut:!0,// Use '/' to close single tags (<br />)
breaks:!1,// Convert '\n' in paragraphs into <br>
langPrefix:"language-",// CSS language prefix for fenced blocks
linkify:!1,// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:!1,// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
//
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"\u201C\u201D\u2018\u2019",/* “”‘’ */ // Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
//
// function (/*str, lang*/) { return ''; }
//
highlight:null,maxNesting:20// Internal protection, recursion limit
},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},{}],14:[function(require,module,exports){// markdown-it default options
'use strict';module.exports={options:{html:!1,// Enable HTML tags in source
xhtmlOut:!1,// Use '/' to close single tags (<br />)
breaks:!1,// Convert '\n' in paragraphs into <br>
langPrefix:"language-",// CSS language prefix for fenced blocks
linkify:!1,// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:!1,// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
//
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"\u201C\u201D\u2018\u2019",/* “”‘’ */ // Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
//
// function (/*str, lang*/) { return ''; }
//
highlight:null,maxNesting:100// Internal protection, recursion limit
},components:{core:{},block:{},inline:{}}}},{}],15:[function(require,module,exports){// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.
'use strict';module.exports={options:{html:!1,// Enable HTML tags in source
xhtmlOut:!1,// Use '/' to close single tags (<br />)
breaks:!1,// Convert '\n' in paragraphs into <br>
langPrefix:"language-",// CSS language prefix for fenced blocks
linkify:!1,// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:!1,// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
//
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"\u201C\u201D\u2018\u2019",/* “”‘’ */ // Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
//
// function (/*str, lang*/) { return ''; }
//
highlight:null,maxNesting:20// Internal protection, recursion limit
},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},{}],16:[function(require,module,exports){/**
       * class Renderer
       *
       * Generates HTML from parsed token stream. Each instance has independent
       * copy of rules. Those can be rewritten with ease. Also, you can add new
       * rules if you create plugin and adds new token types.
       **/'use strict';var assign=require("./common/utils").assign,unescapeAll=require("./common/utils").unescapeAll,escapeHtml=require("./common/utils").escapeHtml,default_rules={};default_rules.code_inline=function(tokens,idx,options,env,slf){var token=tokens[idx];return"<code"+slf.renderAttrs(token)+">"+escapeHtml(tokens[idx].content)+"</code>"};default_rules.code_block=function(tokens,idx,options,env,slf){var token=tokens[idx];return"<pre"+slf.renderAttrs(token)+"><code>"+escapeHtml(tokens[idx].content)+"</code></pre>\n"};default_rules.fence=function(tokens,idx,options,env,slf){var token=tokens[idx],info=token.info?unescapeAll(token.info).trim():"",langName="",highlighted,i,tmpAttrs,tmpToken;if(info){langName=info.split(/\s+/g)[0]}if(options.highlight){highlighted=options.highlight(token.content,langName)||escapeHtml(token.content)}else{highlighted=escapeHtml(token.content)}if(0===highlighted.indexOf("<pre")){return highlighted+"\n"}// If language exists, inject class gently, without modifying original token.
// May be, one day we will add .clone() for token and simplify this part, but
// now we prefer to keep things local.
if(info){i=token.attrIndex("class");tmpAttrs=token.attrs?token.attrs.slice():[];if(0>i){tmpAttrs.push(["class",options.langPrefix+langName])}else{tmpAttrs[i][1]+=" "+options.langPrefix+langName}// Fake token just to render attributes
tmpToken={attrs:tmpAttrs};return"<pre><code"+slf.renderAttrs(tmpToken)+">"+highlighted+"</code></pre>\n"}return"<pre><code"+slf.renderAttrs(token)+">"+highlighted+"</code></pre>\n"};default_rules.image=function(tokens,idx,options,env,slf){var token=tokens[idx];// "alt" attr MUST be set, even if empty. Because it's mandatory and
// should be placed on proper position for tests.
//
// Replace content with actual value
token.attrs[token.attrIndex("alt")][1]=slf.renderInlineAsText(token.children,options,env);return slf.renderToken(tokens,idx,options)};default_rules.hardbreak=function(tokens,idx,options/*, env */){return options.xhtmlOut?"<br />\n":"<br>\n"};default_rules.softbreak=function(tokens,idx,options/*, env */){return options.breaks?options.xhtmlOut?"<br />\n":"<br>\n":"\n"};default_rules.text=function(tokens,idx/*, options, env */){return escapeHtml(tokens[idx].content)};default_rules.html_block=function(tokens,idx/*, options, env */){return tokens[idx].content};default_rules.html_inline=function(tokens,idx/*, options, env */){return tokens[idx].content};/**
          * new Renderer()
          *
          * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
          **/function Renderer(){/**
         * Renderer#rules -> Object
         *
         * Contains render rules for tokens. Can be updated and extended.
         *
         * ##### Example
         *
         * ```javascript
         * var md = require('markdown-it')();
         *
         * md.renderer.rules.strong_open  = function () { return '<b>'; };
         * md.renderer.rules.strong_close = function () { return '</b>'; };
         *
         * var result = md.renderInline(...);
         * ```
         *
         * Each rule is called as independent static function with fixed signature:
         *
         * ```javascript
         * function my_token_render(tokens, idx, options, env, renderer) {
         *   // ...
         *   return renderedHTML;
         * }
         * ```
         *
         * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
         * for more details and examples.
         **/this.rules=assign({},default_rules)}/**
         * Renderer.renderAttrs(token) -> String
         *
         * Render token attributes to string.
         **/Renderer.prototype.renderAttrs=function renderAttrs(token){var i,l,result;if(!token.attrs){return""}result="";for(i=0,l=token.attrs.length;i<l;i++){result+=" "+escapeHtml(token.attrs[i][0])+"=\""+escapeHtml(token.attrs[i][1])+"\""}return result};/**
          * Renderer.renderToken(tokens, idx, options) -> String
          * - tokens (Array): list of tokens
          * - idx (Numbed): token index to render
          * - options (Object): params of parser instance
          *
          * Default token renderer. Can be overriden by custom function
          * in [[Renderer#rules]].
          **/Renderer.prototype.renderToken=function renderToken(tokens,idx,options){var nextToken,result="",needLf=!1,token=tokens[idx];// Tight list paragraphs
if(token.hidden){return""}// Insert a newline between hidden paragraph and subsequent opening
// block-level tag.
//
// For example, here we should insert a newline before blockquote:
//  - a
//    >
//
if(token.block&&-1!==token.nesting&&idx&&tokens[idx-1].hidden){result+="\n"}// Add token name, e.g. `<img`
result+=(-1===token.nesting?"</":"<")+token.tag;// Encode attributes, e.g. `<img src="foo"`
result+=this.renderAttrs(token);// Add a slash for self-closing tags, e.g. `<img src="foo" /`
if(0===token.nesting&&options.xhtmlOut){result+=" /"}// Check if we need to add a newline after this tag
if(token.block){needLf=!0;if(1===token.nesting){if(idx+1<tokens.length){nextToken=tokens[idx+1];if("inline"===nextToken.type||nextToken.hidden){// Block-level tag containing an inline tag.
//
needLf=!1}else if(-1===nextToken.nesting&&nextToken.tag===token.tag){// Opening tag + closing tag of the same type. E.g. `<li></li>`.
//
needLf=!1}}}}result+=needLf?">\n":">";return result};/**
          * Renderer.renderInline(tokens, options, env) -> String
          * - tokens (Array): list on block tokens to renter
          * - options (Object): params of parser instance
          * - env (Object): additional data from parsed input (references, for example)
          *
          * The same as [[Renderer.render]], but for single token of `inline` type.
          **/Renderer.prototype.renderInline=function(tokens,options,env){for(var type,result="",rules=this.rules,i=0,len=tokens.length;i<len;i++){type=tokens[i].type;if("undefined"!==typeof rules[type]){result+=rules[type](tokens,i,options,env,this)}else{result+=this.renderToken(tokens,i,options)}}return result};/** internal
          * Renderer.renderInlineAsText(tokens, options, env) -> String
          * - tokens (Array): list on block tokens to renter
          * - options (Object): params of parser instance
          * - env (Object): additional data from parsed input (references, for example)
          *
          * Special kludge for image `alt` attributes to conform CommonMark spec.
          * Don't try to use it! Spec requires to show `alt` content with stripped markup,
          * instead of simple escaping.
          **/Renderer.prototype.renderInlineAsText=function(tokens,options,env){for(var result="",i=0,len=tokens.length;i<len;i++){if("text"===tokens[i].type){result+=tokens[i].content}else if("image"===tokens[i].type){result+=this.renderInlineAsText(tokens[i].children,options,env)}}return result};/**
          * Renderer.render(tokens, options, env) -> String
          * - tokens (Array): list on block tokens to renter
          * - options (Object): params of parser instance
          * - env (Object): additional data from parsed input (references, for example)
          *
          * Takes token stream and generates HTML. Probably, you will never need to call
          * this method directly.
          **/Renderer.prototype.render=function(tokens,options,env){var i,len,type,result="",rules=this.rules;for(i=0,len=tokens.length;i<len;i++){type=tokens[i].type;if("inline"===type){result+=this.renderInline(tokens[i].children,options,env)}else if("undefined"!==typeof rules[type]){result+=rules[tokens[i].type](tokens,i,options,env,this)}else{result+=this.renderToken(tokens,i,options,env)}}return result};module.exports=Renderer},{"./common/utils":4}],17:[function(require,module,exports){/**
       * class Ruler
       *
       * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
       * [[MarkdownIt#inline]] to manage sequences of functions (rules):
       *
       * - keep rules in defined order
       * - assign the name to each rule
       * - enable/disable rules
       * - add/replace rules
       * - allow assign rules to additional named chains (in the same)
       * - cacheing lists of active rules
       *
       * You will not need use this class directly until write plugins. For simple
       * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
       * [[MarkdownIt.use]].
       **/'use strict';/**
                         * new Ruler()
                         **/function Ruler(){// List of added rules. Each element is:
//
// {
//   name: XXX,
//   enabled: Boolean,
//   fn: Function(),
//   alt: [ name2, name3 ]
// }
//
this.__rules__=[];// Cached rule chains.
//
// First level - chain name, '' for default.
// Second level - diginal anchor for fast filtering by charcodes.
//
this.__cache__=null}////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly
// Find rule index by name
//
Ruler.prototype.__find__=function(name){for(var i=0;i<this.__rules__.length;i++){if(this.__rules__[i].name===name){return i}}return-1};// Build rules lookup cache
//
Ruler.prototype.__compile__=function(){var self=this,chains=[""];// collect unique names
self.__rules__.forEach(function(rule){if(!rule.enabled){return}rule.alt.forEach(function(altName){if(0>chains.indexOf(altName)){chains.push(altName)}})});self.__cache__={};chains.forEach(function(chain){self.__cache__[chain]=[];self.__rules__.forEach(function(rule){if(!rule.enabled){return}if(chain&&0>rule.alt.indexOf(chain)){return}self.__cache__[chain].push(rule.fn)})})};/**
          * Ruler.at(name, fn [, options])
          * - name (String): rule name to replace.
          * - fn (Function): new rule function.
          * - options (Object): new rule options (not mandatory).
          *
          * Replace rule by name with new function & options. Throws error if name not
          * found.
          *
          * ##### Options:
          *
          * - __alt__ - array with names of "alternate" chains.
          *
          * ##### Example
          *
          * Replace existing typographer replacement rule with new one:
          *
          * ```javascript
          * var md = require('markdown-it')();
          *
          * md.core.ruler.at('replacements', function replace(state) {
          *   //...
          * });
          * ```
          **/Ruler.prototype.at=function(name,fn,options){var index=this.__find__(name),opt=options||{};if(-1===index){throw new Error("Parser rule not found: "+name)}this.__rules__[index].fn=fn;this.__rules__[index].alt=opt.alt||[];this.__cache__=null};/**
          * Ruler.before(beforeName, ruleName, fn [, options])
          * - beforeName (String): new rule will be added before this one.
          * - ruleName (String): name of added rule.
          * - fn (Function): rule function.
          * - options (Object): rule options (not mandatory).
          *
          * Add new rule to chain before one with given name. See also
          * [[Ruler.after]], [[Ruler.push]].
          *
          * ##### Options:
          *
          * - __alt__ - array with names of "alternate" chains.
          *
          * ##### Example
          *
          * ```javascript
          * var md = require('markdown-it')();
          *
          * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
          *   //...
          * });
          * ```
          **/Ruler.prototype.before=function(beforeName,ruleName,fn,options){var index=this.__find__(beforeName),opt=options||{};if(-1===index){throw new Error("Parser rule not found: "+beforeName)}this.__rules__.splice(index,0,{name:ruleName,enabled:!0,fn:fn,alt:opt.alt||[]});this.__cache__=null};/**
          * Ruler.after(afterName, ruleName, fn [, options])
          * - afterName (String): new rule will be added after this one.
          * - ruleName (String): name of added rule.
          * - fn (Function): rule function.
          * - options (Object): rule options (not mandatory).
          *
          * Add new rule to chain after one with given name. See also
          * [[Ruler.before]], [[Ruler.push]].
          *
          * ##### Options:
          *
          * - __alt__ - array with names of "alternate" chains.
          *
          * ##### Example
          *
          * ```javascript
          * var md = require('markdown-it')();
          *
          * md.inline.ruler.after('text', 'my_rule', function replace(state) {
          *   //...
          * });
          * ```
          **/Ruler.prototype.after=function(afterName,ruleName,fn,options){var index=this.__find__(afterName),opt=options||{};if(-1===index){throw new Error("Parser rule not found: "+afterName)}this.__rules__.splice(index+1,0,{name:ruleName,enabled:!0,fn:fn,alt:opt.alt||[]});this.__cache__=null};/**
          * Ruler.push(ruleName, fn [, options])
          * - ruleName (String): name of added rule.
          * - fn (Function): rule function.
          * - options (Object): rule options (not mandatory).
          *
          * Push new rule to the end of chain. See also
          * [[Ruler.before]], [[Ruler.after]].
          *
          * ##### Options:
          *
          * - __alt__ - array with names of "alternate" chains.
          *
          * ##### Example
          *
          * ```javascript
          * var md = require('markdown-it')();
          *
          * md.core.ruler.push('my_rule', function replace(state) {
          *   //...
          * });
          * ```
          **/Ruler.prototype.push=function(ruleName,fn,options){var opt=options||{};this.__rules__.push({name:ruleName,enabled:!0,fn:fn,alt:opt.alt||[]});this.__cache__=null};/**
          * Ruler.enable(list [, ignoreInvalid]) -> Array
          * - list (String|Array): list of rule names to enable.
          * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
          *
          * Enable rules with given names. If any rule name not found - throw Error.
          * Errors can be disabled by second param.
          *
          * Returns list of found rule names (if no exception happened).
          *
          * See also [[Ruler.disable]], [[Ruler.enableOnly]].
          **/Ruler.prototype.enable=function(list,ignoreInvalid){if(!Array.isArray(list)){list=[list]}var result=[];// Search by name and enable
list.forEach(function(name){var idx=this.__find__(name);if(0>idx){if(ignoreInvalid){return}throw new Error("Rules manager: invalid rule name "+name)}this.__rules__[idx].enabled=!0;result.push(name)},this);this.__cache__=null;return result};/**
          * Ruler.enableOnly(list [, ignoreInvalid])
          * - list (String|Array): list of rule names to enable (whitelist).
          * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
          *
          * Enable rules with given names, and disable everything else. If any rule name
          * not found - throw Error. Errors can be disabled by second param.
          *
          * See also [[Ruler.disable]], [[Ruler.enable]].
          **/Ruler.prototype.enableOnly=function(list,ignoreInvalid){if(!Array.isArray(list)){list=[list]}this.__rules__.forEach(function(rule){rule.enabled=!1});this.enable(list,ignoreInvalid)};/**
          * Ruler.disable(list [, ignoreInvalid]) -> Array
          * - list (String|Array): list of rule names to disable.
          * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
          *
          * Disable rules with given names. If any rule name not found - throw Error.
          * Errors can be disabled by second param.
          *
          * Returns list of found rule names (if no exception happened).
          *
          * See also [[Ruler.enable]], [[Ruler.enableOnly]].
          **/Ruler.prototype.disable=function(list,ignoreInvalid){if(!Array.isArray(list)){list=[list]}var result=[];// Search by name and disable
list.forEach(function(name){var idx=this.__find__(name);if(0>idx){if(ignoreInvalid){return}throw new Error("Rules manager: invalid rule name "+name)}this.__rules__[idx].enabled=!1;result.push(name)},this);this.__cache__=null;return result};/**
          * Ruler.getRules(chainName) -> Array
          *
          * Return array of active functions (rules) for given chain name. It analyzes
          * rules configuration, compiles caches if not exists and returns result.
          *
          * Default chain name is `''` (empty string). It can't be skipped. That's
          * done intentionally, to keep signature monomorphic for high speed.
          **/Ruler.prototype.getRules=function(chainName){if(null===this.__cache__){this.__compile__()}// Chain can be empty, if rules disabled. But we still have to return Array.
return this.__cache__[chainName]||[]};module.exports=Ruler},{}],18:[function(require,module,exports){// Block quotes
'use strict';var isSpace=require("../common/utils").isSpace;module.exports=function blockquote(state,startLine,endLine,silent){var adjustTab,ch,i,initial,l,lastLineEmpty,lines,nextLine,offset,oldBMarks,oldBSCount,oldIndent,oldParentType,oldSCount,oldTShift,spaceAfterMarker,terminate,terminatorRules,token,wasOutdented,oldLineMax=state.lineMax,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}// check the block quote marker
if(62!==state.src.charCodeAt(pos++)/* > */){return!1}// we know that it's going to be a valid blockquote,
// so no point trying to find the end of it in silent mode
if(silent){return!0}// skip spaces after ">" and re-calculate offset
initial=offset=state.sCount[startLine]+pos-(state.bMarks[startLine]+state.tShift[startLine]);// skip one optional space after '>'
if(32===state.src.charCodeAt(pos)/* space */){// ' >   test '
//     ^ -- position start of line here:
pos++;initial++;offset++;adjustTab=!1;spaceAfterMarker=!0}else if(9===state.src.charCodeAt(pos)/* tab */){spaceAfterMarker=!0;if(3===(state.bsCount[startLine]+offset)%4){// '  >\t  test '
//       ^ -- position start of line here (tab has width===1)
pos++;initial++;offset++;adjustTab=!1}else{// ' >\t  test '
//    ^ -- position start of line here + shift bsCount slightly
//         to make extra space appear
adjustTab=!0}}else{spaceAfterMarker=!1}oldBMarks=[state.bMarks[startLine]];state.bMarks[startLine]=pos;while(pos<max){ch=state.src.charCodeAt(pos);if(isSpace(ch)){if(9===ch){offset+=4-(offset+state.bsCount[startLine]+(adjustTab?1:0))%4}else{offset++}}else{break}pos++}oldBSCount=[state.bsCount[startLine]];state.bsCount[startLine]=state.sCount[startLine]+1+(spaceAfterMarker?1:0);lastLineEmpty=pos>=max;oldSCount=[state.sCount[startLine]];state.sCount[startLine]=offset-initial;oldTShift=[state.tShift[startLine]];state.tShift[startLine]=pos-state.bMarks[startLine];terminatorRules=state.md.block.ruler.getRules("blockquote");oldParentType=state.parentType;state.parentType="blockquote";wasOutdented=!1;// Search the end of the block
//
// Block ends with either:
//  1. an empty line outside:
//     ```
//     > test
//
//     ```
//  2. an empty line inside:
//     ```
//     >
//     test
//     ```
//  3. another tag:
//     ```
//     > test
//      - - -
//     ```
for(nextLine=startLine+1;nextLine<endLine;nextLine++){// check if it's outdented, i.e. it's inside list item and indented
// less than said list item:
//
// ```
// 1. anything
//    > current blockquote
// 2. checking this line
// ```
if(state.sCount[nextLine]<state.blkIndent)wasOutdented=!0;pos=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];if(pos>=max){// Case 1: line is not inside the blockquote, and this line is empty.
break}if(62===state.src.charCodeAt(pos++)/* > */&&!wasOutdented){// This line is inside the blockquote.
// skip spaces after ">" and re-calculate offset
initial=offset=state.sCount[nextLine]+pos-(state.bMarks[nextLine]+state.tShift[nextLine]);// skip one optional space after '>'
if(32===state.src.charCodeAt(pos)/* space */){// ' >   test '
//     ^ -- position start of line here:
pos++;initial++;offset++;adjustTab=!1;spaceAfterMarker=!0}else if(9===state.src.charCodeAt(pos)/* tab */){spaceAfterMarker=!0;if(3===(state.bsCount[nextLine]+offset)%4){// '  >\t  test '
//       ^ -- position start of line here (tab has width===1)
pos++;initial++;offset++;adjustTab=!1}else{// ' >\t  test '
//    ^ -- position start of line here + shift bsCount slightly
//         to make extra space appear
adjustTab=!0}}else{spaceAfterMarker=!1}oldBMarks.push(state.bMarks[nextLine]);state.bMarks[nextLine]=pos;while(pos<max){ch=state.src.charCodeAt(pos);if(isSpace(ch)){if(9===ch){offset+=4-(offset+state.bsCount[nextLine]+(adjustTab?1:0))%4}else{offset++}}else{break}pos++}lastLineEmpty=pos>=max;oldBSCount.push(state.bsCount[nextLine]);state.bsCount[nextLine]=state.sCount[nextLine]+1+(spaceAfterMarker?1:0);oldSCount.push(state.sCount[nextLine]);state.sCount[nextLine]=offset-initial;oldTShift.push(state.tShift[nextLine]);state.tShift[nextLine]=pos-state.bMarks[nextLine];continue}// Case 2: line is not inside the blockquote, and the last line was empty.
if(lastLineEmpty){break}// Case 3: another tag found.
terminate=!1;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,!0)){terminate=!0;break}}if(terminate){// Quirk to enforce "hard termination mode" for paragraphs;
// normally if you call `tokenize(state, startLine, nextLine)`,
// paragraphs will look below nextLine for paragraph continuation,
// but if blockquote is terminated by another tag, they shouldn't
state.lineMax=nextLine;if(0!==state.blkIndent){// state.blkIndent was non-zero, we now set it to zero,
// so we need to re-calculate all offsets to appear as
// if indent wasn't changed
oldBMarks.push(state.bMarks[nextLine]);oldBSCount.push(state.bsCount[nextLine]);oldTShift.push(state.tShift[nextLine]);oldSCount.push(state.sCount[nextLine]);state.sCount[nextLine]-=state.blkIndent}break}oldBMarks.push(state.bMarks[nextLine]);oldBSCount.push(state.bsCount[nextLine]);oldTShift.push(state.tShift[nextLine]);oldSCount.push(state.sCount[nextLine]);// A negative indentation means that this is a paragraph continuation
//
state.sCount[nextLine]=-1}oldIndent=state.blkIndent;state.blkIndent=0;token=state.push("blockquote_open","blockquote",1);token.markup=">";token.map=lines=[startLine,0];state.md.block.tokenize(state,startLine,nextLine);token=state.push("blockquote_close","blockquote",-1);token.markup=">";state.lineMax=oldLineMax;state.parentType=oldParentType;lines[1]=state.line;// Restore original tShift; this might not be necessary since the parser
// has already been here, but just to make sure we can do that.
for(i=0;i<oldTShift.length;i++){state.bMarks[i+startLine]=oldBMarks[i];state.tShift[i+startLine]=oldTShift[i];state.sCount[i+startLine]=oldSCount[i];state.bsCount[i+startLine]=oldBSCount[i]}state.blkIndent=oldIndent;return!0}},{"../common/utils":4}],19:[function(require,module,exports){// Code block (4 spaces padded)
'use strict';module.exports=function code(state,startLine,endLine/*, silent*/){var nextLine,last,token;if(4>state.sCount[startLine]-state.blkIndent){return!1}last=nextLine=startLine+1;while(nextLine<endLine){if(state.isEmpty(nextLine)){nextLine++;continue}if(4<=state.sCount[nextLine]-state.blkIndent){nextLine++;last=nextLine;continue}break}state.line=last;token=state.push("code_block","code",0);token.content=state.getLines(startLine,last,4+state.blkIndent,!0);token.map=[startLine,state.line];return!0}},{}],20:[function(require,module,exports){// fences (``` lang, ~~~ lang)
'use strict';module.exports=function fence(state,startLine,endLine,silent){var marker,len,params,nextLine,mem,token,markup,haveEndMarker=!1,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}if(pos+3>max){return!1}marker=state.src.charCodeAt(pos);if(126!==marker/* ~ */&&96!==marker/* ` */){return!1}// scan marker length
mem=pos;pos=state.skipChars(pos,marker);len=pos-mem;if(3>len){return!1}markup=state.src.slice(mem,pos);params=state.src.slice(pos,max);if(96===marker/* ` */){if(0<=params.indexOf(String.fromCharCode(marker))){return!1}}// Since start is found, we can report success here in validation mode
if(silent){return!0}// search end of block
nextLine=startLine;for(;;){nextLine++;if(nextLine>=endLine){// unclosed block should be autoclosed by end of document.
// also block seems to be autoclosed by end of parent
break}pos=mem=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];if(pos<max&&state.sCount[nextLine]<state.blkIndent){// non-empty line with negative indent should stop the list:
// - ```
//  test
break}if(state.src.charCodeAt(pos)!==marker){continue}if(4<=state.sCount[nextLine]-state.blkIndent){// closing fence should be indented less than 4 spaces
continue}pos=state.skipChars(pos,marker);// closing code fence must be at least as long as the opening one
if(pos-mem<len){continue}// make sure tail has spaces only
pos=state.skipSpaces(pos);if(pos<max){continue}haveEndMarker=!0;// found!
break}// If a fence has heading spaces, they should be removed from its inner block
len=state.sCount[startLine];state.line=nextLine+(haveEndMarker?1:0);token=state.push("fence","code",0);token.info=params;token.content=state.getLines(startLine+1,nextLine,len,!0);token.markup=markup;token.map=[startLine,state.line];return!0}},{}],21:[function(require,module,exports){// heading (#, ##, ...)
'use strict';var isSpace=require("../common/utils").isSpace;module.exports=function heading(state,startLine,endLine,silent){var ch,level,tmp,token,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}ch=state.src.charCodeAt(pos);if(35!==ch/* # */||pos>=max){return!1}// count heading level
level=1;ch=state.src.charCodeAt(++pos);while(35===ch/* # */&&pos<max&&6>=level){level++;ch=state.src.charCodeAt(++pos)}if(6<level||pos<max&&!isSpace(ch)){return!1}if(silent){return!0}// Let's cut tails like '    ###  ' from the end of string
max=state.skipSpacesBack(max,pos);tmp=state.skipCharsBack(max,35,pos);// #
if(tmp>pos&&isSpace(state.src.charCodeAt(tmp-1))){max=tmp}state.line=startLine+1;token=state.push("heading_open","h"+(level+""),1);token.markup="########".slice(0,level);token.map=[startLine,state.line];token=state.push("inline","",0);token.content=state.src.slice(pos,max).trim();token.map=[startLine,state.line];token.children=[];token=state.push("heading_close","h"+(level+""),-1);token.markup="########".slice(0,level);return!0}},{"../common/utils":4}],22:[function(require,module,exports){// Horizontal rule
'use strict';var isSpace=require("../common/utils").isSpace;module.exports=function hr(state,startLine,endLine,silent){var marker,cnt,ch,token,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}marker=state.src.charCodeAt(pos++);// Check hr marker
if(42!==marker/* * */&&45!==marker/* - */&&95!==marker/* _ */){return!1}// markers can be mixed with spaces, but there should be at least 3 of them
cnt=1;while(pos<max){ch=state.src.charCodeAt(pos++);if(ch!==marker&&!isSpace(ch)){return!1}if(ch===marker){cnt++}}if(3>cnt){return!1}if(silent){return!0}state.line=startLine+1;token=state.push("hr","hr",0);token.map=[startLine,state.line];token.markup=Array(cnt+1).join(String.fromCharCode(marker));return!0}},{"../common/utils":4}],23:[function(require,module,exports){// HTML block
'use strict';var block_names=require("../common/html_blocks"),HTML_OPEN_CLOSE_TAG_RE=require("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,HTML_SEQUENCES=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+block_names.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(HTML_OPEN_CLOSE_TAG_RE.source+"\\s*$"),/^$/,!1]];module.exports=function html_block(state,startLine,endLine,silent){var i,nextLine,token,lineText,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine];// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}if(!state.md.options.html){return!1}if(60!==state.src.charCodeAt(pos)/* < */){return!1}lineText=state.src.slice(pos,max);for(i=0;i<HTML_SEQUENCES.length;i++){if(HTML_SEQUENCES[i][0].test(lineText)){break}}if(i===HTML_SEQUENCES.length){return!1}if(silent){// true if this sequence can be a terminator, false otherwise
return HTML_SEQUENCES[i][2]}nextLine=startLine+1;// If we are here - we detected HTML block.
// Let's roll down till block end.
if(!HTML_SEQUENCES[i][1].test(lineText)){for(;nextLine<endLine;nextLine++){if(state.sCount[nextLine]<state.blkIndent){break}pos=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];lineText=state.src.slice(pos,max);if(HTML_SEQUENCES[i][1].test(lineText)){if(0!==lineText.length){nextLine++}break}}}state.line=nextLine;token=state.push("html_block","",0);token.map=[startLine,nextLine];token.content=state.getLines(startLine,nextLine,state.blkIndent,!0);return!0}},{"../common/html_blocks":2,"../common/html_re":3}],24:[function(require,module,exports){// lheading (---, ===)
'use strict';module.exports=function lheading(state,startLine,endLine/*, silent*/){var content,terminate,i,l,token,pos,max,level,marker,nextLine=startLine+1,oldParentType,terminatorRules=state.md.block.ruler.getRules("paragraph");// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}oldParentType=state.parentType;state.parentType="paragraph";// use paragraph to match terminatorRules
// jump line-by-line until empty one or EOF
for(;nextLine<endLine&&!state.isEmpty(nextLine);nextLine++){// this would be a code block normally, but after paragraph
// it's considered a lazy continuation regardless of what's there
if(3<state.sCount[nextLine]-state.blkIndent){continue}//
// Check for underline in setext header
//
if(state.sCount[nextLine]>=state.blkIndent){pos=state.bMarks[nextLine]+state.tShift[nextLine];max=state.eMarks[nextLine];if(pos<max){marker=state.src.charCodeAt(pos);if(45===marker/* - */||61===marker/* = */){pos=state.skipChars(pos,marker);pos=state.skipSpaces(pos);if(pos>=max){level=61===marker/* = */?1:2;break}}}}// quirk for blockquotes, this line should already be checked by that rule
if(0>state.sCount[nextLine]){continue}// Some tags can terminate paragraph without empty line.
terminate=!1;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,!0)){terminate=!0;break}}if(terminate){break}}if(!level){// Didn't find valid underline
return!1}content=state.getLines(startLine,nextLine,state.blkIndent,!1).trim();state.line=nextLine+1;token=state.push("heading_open","h"+(level+""),1);token.markup=String.fromCharCode(marker);token.map=[startLine,state.line];token=state.push("inline","",0);token.content=content;token.map=[startLine,state.line-1];token.children=[];token=state.push("heading_close","h"+(level+""),-1);token.markup=String.fromCharCode(marker);state.parentType=oldParentType;return!0}},{}],25:[function(require,module,exports){// Lists
'use strict';var isSpace=require("../common/utils").isSpace;// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipBulletListMarker(state,startLine){var marker,pos,max,ch;pos=state.bMarks[startLine]+state.tShift[startLine];max=state.eMarks[startLine];marker=state.src.charCodeAt(pos++);// Check bullet
if(42!==marker/* * */&&45!==marker/* - */&&43!==marker/* + */){return-1}if(pos<max){ch=state.src.charCodeAt(pos);if(!isSpace(ch)){// " -test " - is not a list item
return-1}}return pos}// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipOrderedListMarker(state,startLine){var ch,start=state.bMarks[startLine]+state.tShift[startLine],pos=start,max=state.eMarks[startLine];// List marker should have at least 2 chars (digit + dot)
if(pos+1>=max){return-1}ch=state.src.charCodeAt(pos++);if(48>ch/* 0 */||57<ch/* 9 */){return-1}for(;;){// EOL -> fail
if(pos>=max){return-1}ch=state.src.charCodeAt(pos++);if(48<=ch/* 0 */&&57>=ch/* 9 */){// List marker should have no more than 9 digits
// (prevents integer overflow in browsers)
if(10<=pos-start){return-1}continue}// found valid marker
if(41===ch/* ) */||46===ch/* . */){break}return-1}if(pos<max){ch=state.src.charCodeAt(pos);if(!isSpace(ch)){// " 1.test " - is not a list item
return-1}}return pos}function markTightParagraphs(state,idx){var i,l,level=state.level+2;for(i=idx+2,l=state.tokens.length-2;i<l;i++){if(state.tokens[i].level===level&&"paragraph_open"===state.tokens[i].type){state.tokens[i+2].hidden=!0;state.tokens[i].hidden=!0;i+=2}}}module.exports=function list(state,startLine,endLine,silent){var ch,contentStart,i,indent,indentAfterMarker,initial,isOrdered,itemLines,l,listLines,listTokIdx,markerCharCode,markerValue,max,nextLine,offset,oldListIndent,oldParentType,oldSCount,oldTShift,oldTight,pos,posAfterMarker,prevEmptyEnd,start,terminate,terminatorRules,token,isTerminatingParagraph=!1,tight=!0;// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}// Special case:
//  - item 1
//   - item 2
//    - item 3
//     - item 4
//      - this one is a paragraph continuation
if(0<=state.listIndent&&4<=state.sCount[startLine]-state.listIndent&&state.sCount[startLine]<state.blkIndent){return!1}// limit conditions when list can interrupt
// a paragraph (validation mode only)
if(silent&&"paragraph"===state.parentType){// Next list item should still terminate previous list item;
//
// This code can fail if plugins use blkIndent as well as lists,
// but I hope the spec gets fixed long before that happens.
//
if(state.tShift[startLine]>=state.blkIndent){isTerminatingParagraph=!0}}// Detect list type and position after marker
if(0<=(posAfterMarker=skipOrderedListMarker(state,startLine))){isOrdered=!0;start=state.bMarks[startLine]+state.tShift[startLine];markerValue=+state.src.substr(start,posAfterMarker-start-1);// If we're starting a new ordered list right after
// a paragraph, it should start with 1.
if(isTerminatingParagraph&&1!==markerValue)return!1}else if(0<=(posAfterMarker=skipBulletListMarker(state,startLine))){isOrdered=!1}else{return!1}// If we're starting a new unordered list right after
// a paragraph, first line should not be empty.
if(isTerminatingParagraph){if(state.skipSpaces(posAfterMarker)>=state.eMarks[startLine])return!1}// We should terminate list on style change. Remember first one to compare.
markerCharCode=state.src.charCodeAt(posAfterMarker-1);// For validation mode we can terminate immediately
if(silent){return!0}// Start list
listTokIdx=state.tokens.length;if(isOrdered){token=state.push("ordered_list_open","ol",1);if(1!==markerValue){token.attrs=[["start",markerValue]]}}else{token=state.push("bullet_list_open","ul",1)}token.map=listLines=[startLine,0];token.markup=String.fromCharCode(markerCharCode);//
// Iterate list items
//
nextLine=startLine;prevEmptyEnd=!1;terminatorRules=state.md.block.ruler.getRules("list");oldParentType=state.parentType;state.parentType="list";while(nextLine<endLine){pos=posAfterMarker;max=state.eMarks[nextLine];initial=offset=state.sCount[nextLine]+posAfterMarker-(state.bMarks[startLine]+state.tShift[startLine]);while(pos<max){ch=state.src.charCodeAt(pos);if(9===ch){offset+=4-(offset+state.bsCount[nextLine])%4}else if(32===ch){offset++}else{break}pos++}contentStart=pos;if(contentStart>=max){// trimming space in "-    \n  3" case, indent is 1 here
indentAfterMarker=1}else{indentAfterMarker=offset-initial}// If we have more than 4 spaces, the indent is 1
// (the rest is just indented code block)
if(4<indentAfterMarker){indentAfterMarker=1}// "  -  test"
//  ^^^^^ - calculating total length of this thing
indent=initial+indentAfterMarker;// Run subparser & write tokens
token=state.push("list_item_open","li",1);token.markup=String.fromCharCode(markerCharCode);token.map=itemLines=[startLine,0];// change current state, then restore it after parser subcall
oldTight=state.tight;oldTShift=state.tShift[startLine];oldSCount=state.sCount[startLine];//  - example list
// ^ listIndent position will be here
//   ^ blkIndent position will be here
//
oldListIndent=state.listIndent;state.listIndent=state.blkIndent;state.blkIndent=indent;state.tight=!0;state.tShift[startLine]=contentStart-state.bMarks[startLine];state.sCount[startLine]=offset;if(contentStart>=max&&state.isEmpty(startLine+1)){// workaround for this case
// (list item is empty, list terminates before "foo"):
// ~~~~~~~~
//   -
//
//     foo
// ~~~~~~~~
state.line=Math.min(state.line+2,endLine)}else{state.md.block.tokenize(state,startLine,endLine,!0)}// If any of list item is tight, mark list as tight
if(!state.tight||prevEmptyEnd){tight=!1}// Item become loose if finish with empty line,
// but we should filter last element, because it means list finish
prevEmptyEnd=1<state.line-startLine&&state.isEmpty(state.line-1);state.blkIndent=state.listIndent;state.listIndent=oldListIndent;state.tShift[startLine]=oldTShift;state.sCount[startLine]=oldSCount;state.tight=oldTight;token=state.push("list_item_close","li",-1);token.markup=String.fromCharCode(markerCharCode);nextLine=startLine=state.line;itemLines[1]=nextLine;contentStart=state.bMarks[startLine];if(nextLine>=endLine){break}//
// Try to check if list is terminated or continued.
//
if(state.sCount[nextLine]<state.blkIndent){break}// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){break}// fail if terminating block found
terminate=!1;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,!0)){terminate=!0;break}}if(terminate){break}// fail if list has another type
if(isOrdered){posAfterMarker=skipOrderedListMarker(state,nextLine);if(0>posAfterMarker){break}}else{posAfterMarker=skipBulletListMarker(state,nextLine);if(0>posAfterMarker){break}}if(markerCharCode!==state.src.charCodeAt(posAfterMarker-1)){break}}// Finalize list
if(isOrdered){token=state.push("ordered_list_close","ol",-1)}else{token=state.push("bullet_list_close","ul",-1)}token.markup=String.fromCharCode(markerCharCode);listLines[1]=nextLine;state.line=nextLine;state.parentType=oldParentType;// mark paragraphs tight if needed
if(tight){markTightParagraphs(state,listTokIdx)}return!0}},{"../common/utils":4}],26:[function(require,module,exports){// Paragraph
'use strict';module.exports=function paragraph(state,startLine/*, endLine*/){var content,terminate,i,l,token,oldParentType,nextLine=startLine+1,terminatorRules=state.md.block.ruler.getRules("paragraph"),endLine=state.lineMax;oldParentType=state.parentType;state.parentType="paragraph";// jump line-by-line until empty one or EOF
for(;nextLine<endLine&&!state.isEmpty(nextLine);nextLine++){// this would be a code block normally, but after paragraph
// it's considered a lazy continuation regardless of what's there
if(3<state.sCount[nextLine]-state.blkIndent){continue}// quirk for blockquotes, this line should already be checked by that rule
if(0>state.sCount[nextLine]){continue}// Some tags can terminate paragraph without empty line.
terminate=!1;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,!0)){terminate=!0;break}}if(terminate){break}}content=state.getLines(startLine,nextLine,state.blkIndent,!1).trim();state.line=nextLine;token=state.push("paragraph_open","p",1);token.map=[startLine,state.line];token=state.push("inline","",0);token.content=content;token.map=[startLine,state.line];token.children=[];token=state.push("paragraph_close","p",-1);state.parentType=oldParentType;return!0}},{}],27:[function(require,module,exports){'use strict';var normalizeReference=require("../common/utils").normalizeReference,isSpace=require("../common/utils").isSpace;module.exports=function reference(state,startLine,_endLine,silent){var ch,destEndPos,destEndLineNo,endLine,href,i,l,label,labelEnd,oldParentType,res,start,str,terminate,terminatorRules,title,lines=0,pos=state.bMarks[startLine]+state.tShift[startLine],max=state.eMarks[startLine],nextLine=startLine+1;// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[startLine]-state.blkIndent){return!1}if(91!==state.src.charCodeAt(pos)/* [ */){return!1}// Simple check to quickly interrupt scan on [link](url) at the start of line.
// Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
while(++pos<max){if(93===state.src.charCodeAt(pos)/* ] */&&92!==state.src.charCodeAt(pos-1)/* \ */){if(pos+1===max){return!1}if(58!==state.src.charCodeAt(pos+1)/* : */){return!1}break}}endLine=state.lineMax;// jump line-by-line until empty one or EOF
terminatorRules=state.md.block.ruler.getRules("reference");oldParentType=state.parentType;state.parentType="reference";for(;nextLine<endLine&&!state.isEmpty(nextLine);nextLine++){// this would be a code block normally, but after paragraph
// it's considered a lazy continuation regardless of what's there
if(3<state.sCount[nextLine]-state.blkIndent){continue}// quirk for blockquotes, this line should already be checked by that rule
if(0>state.sCount[nextLine]){continue}// Some tags can terminate paragraph without empty line.
terminate=!1;for(i=0,l=terminatorRules.length;i<l;i++){if(terminatorRules[i](state,nextLine,endLine,!0)){terminate=!0;break}}if(terminate){break}}str=state.getLines(startLine,nextLine,state.blkIndent,!1).trim();max=str.length;for(pos=1;pos<max;pos++){ch=str.charCodeAt(pos);if(91===ch/* [ */){return!1}else if(93===ch/* ] */){labelEnd=pos;break}else if(10===ch/* \n */){lines++}else if(92===ch/* \ */){pos++;if(pos<max&&10===str.charCodeAt(pos)){lines++}}}if(0>labelEnd||58!==str.charCodeAt(labelEnd+1)/* : */){return!1}// [label]:   destination   'title'
//         ^^^ skip optional whitespace here
for(pos=labelEnd+2;pos<max;pos++){ch=str.charCodeAt(pos);if(10===ch){lines++}else if(isSpace(ch)){/*eslint no-empty:0*/}else{break}}// [label]:   destination   'title'
//            ^^^^^^^^^^^ parse this
res=state.md.helpers.parseLinkDestination(str,pos,max);if(!res.ok){return!1}href=state.md.normalizeLink(res.str);if(!state.md.validateLink(href)){return!1}pos=res.pos;lines+=res.lines;// save cursor state, we could require to rollback later
destEndPos=pos;destEndLineNo=lines;// [label]:   destination   'title'
//                       ^^^ skipping those spaces
start=pos;for(;pos<max;pos++){ch=str.charCodeAt(pos);if(10===ch){lines++}else if(isSpace(ch)){/*eslint no-empty:0*/}else{break}}// [label]:   destination   'title'
//                          ^^^^^^^ parse this
res=state.md.helpers.parseLinkTitle(str,pos,max);if(pos<max&&start!==pos&&res.ok){title=res.str;pos=res.pos;lines+=res.lines}else{title="";pos=destEndPos;lines=destEndLineNo}// skip trailing spaces until the rest of the line
while(pos<max){ch=str.charCodeAt(pos);if(!isSpace(ch)){break}pos++}if(pos<max&&10!==str.charCodeAt(pos)){if(title){// garbage at the end of the line after title,
// but it could still be a valid reference if we roll back
title="";pos=destEndPos;lines=destEndLineNo;while(pos<max){ch=str.charCodeAt(pos);if(!isSpace(ch)){break}pos++}}}if(pos<max&&10!==str.charCodeAt(pos)){// garbage at the end of the line
return!1}label=normalizeReference(str.slice(1,labelEnd));if(!label){// CommonMark 0.20 disallows empty labels
return!1}// Reference can not terminate anything. This check is for safety only.
/*istanbul ignore if*/if(silent){return!0}if("undefined"===typeof state.env.references){state.env.references={}}if("undefined"===typeof state.env.references[label]){state.env.references[label]={title:title,href:href}}state.parentType=oldParentType;state.line=startLine+lines+1;return!0}},{"../common/utils":4}],28:[function(require,module,exports){// Parser state class
'use strict';var Token=require("../token"),isSpace=require("../common/utils").isSpace;function StateBlock(src,md,env,tokens){var ch,s,start,pos,len,indent,offset,indent_found;this.src=src;// link to parser instance
this.md=md;this.env=env;//
// Internal state vartiables
//
this.tokens=tokens;this.bMarks=[];// line begin offsets for fast jumps
this.eMarks=[];// line end offsets for fast jumps
this.tShift=[];// offsets of the first non-space characters (tabs not expanded)
this.sCount=[];// indents for each line (tabs expanded)
// An amount of virtual spaces (tabs expanded) between beginning
// of each line (bMarks) and real beginning of that line.
//
// It exists only as a hack because blockquotes override bMarks
// losing information in the process.
//
// It's used only when expanding tabs, you can think about it as
// an initial tab length, e.g. bsCount=21 applied to string `\t123`
// means first tab should be expanded to 4-21%4 === 3 spaces.
//
this.bsCount=[];// block parser variables
this.blkIndent=0;// required block content indent (for example, if we are
// inside a list, it would be positioned after list marker)
this.line=0;// line index in src
this.lineMax=0;// lines count
this.tight=!1;// loose/tight mode for lists
this.ddIndent=-1;// indent of the current dd block (-1 if there isn't any)
this.listIndent=-1;// indent of the current list block (-1 if there isn't any)
// can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
// used in lists to determine if they interrupt a paragraph
this.parentType="root";this.level=0;// renderer
this.result="";// Create caches
// Generate markers.
s=this.src;indent_found=!1;for(start=pos=indent=offset=0,len=s.length;pos<len;pos++){ch=s.charCodeAt(pos);if(!indent_found){if(isSpace(ch)){indent++;if(9===ch){offset+=4-offset%4}else{offset++}continue}else{indent_found=!0}}if(10===ch||pos===len-1){if(10!==ch){pos++}this.bMarks.push(start);this.eMarks.push(pos);this.tShift.push(indent);this.sCount.push(offset);this.bsCount.push(0);indent_found=!1;indent=0;offset=0;start=pos+1}}// Push fake entry to simplify cache bounds checks
this.bMarks.push(s.length);this.eMarks.push(s.length);this.tShift.push(0);this.sCount.push(0);this.bsCount.push(0);this.lineMax=this.bMarks.length-1;// don't count last fake line
}// Push new token to "stream".
//
StateBlock.prototype.push=function(type,tag,nesting){var token=new Token(type,tag,nesting);token.block=!0;if(0>nesting)this.level--;// closing tag
token.level=this.level;if(0<nesting)this.level++;// opening tag
this.tokens.push(token);return token};StateBlock.prototype.isEmpty=function isEmpty(line){return this.bMarks[line]+this.tShift[line]>=this.eMarks[line]};StateBlock.prototype.skipEmptyLines=function skipEmptyLines(from){for(var max=this.lineMax;from<max;from++){if(this.bMarks[from]+this.tShift[from]<this.eMarks[from]){break}}return from};// Skip spaces from given position.
StateBlock.prototype.skipSpaces=function skipSpaces(pos){for(var ch,max=this.src.length;pos<max;pos++){ch=this.src.charCodeAt(pos);if(!isSpace(ch)){break}}return pos};// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack=function skipSpacesBack(pos,min){if(pos<=min){return pos}while(pos>min){if(!isSpace(this.src.charCodeAt(--pos))){return pos+1}}return pos};// Skip char codes from given position
StateBlock.prototype.skipChars=function skipChars(pos,code){for(var max=this.src.length;pos<max;pos++){if(this.src.charCodeAt(pos)!==code){break}}return pos};// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack=function skipCharsBack(pos,code,min){if(pos<=min){return pos}while(pos>min){if(code!==this.src.charCodeAt(--pos)){return pos+1}}return pos};// cut lines range from source.
StateBlock.prototype.getLines=function getLines(begin,end,indent,keepLastLF){var i,lineIndent,ch,first,last,queue,lineStart,line=begin;if(begin>=end){return""}queue=Array(end-begin);for(i=0;line<end;line++,i++){lineIndent=0;lineStart=first=this.bMarks[line];if(line+1<end||keepLastLF){// No need for bounds check because we have fake entry on tail.
last=this.eMarks[line]+1}else{last=this.eMarks[line]}while(first<last&&lineIndent<indent){ch=this.src.charCodeAt(first);if(isSpace(ch)){if(9===ch){lineIndent+=4-(lineIndent+this.bsCount[line])%4}else{lineIndent++}}else if(first-lineStart<this.tShift[line]){// patched tShift masked characters to look like spaces (blockquotes, list markers)
lineIndent++}else{break}first++}if(lineIndent>indent){// partially expanding tabs in code blocks, e.g '\t\tfoobar'
// with indent=2 becomes '  \tfoobar'
queue[i]=Array(lineIndent-indent+1).join(" ")+this.src.slice(first,last)}else{queue[i]=this.src.slice(first,last)}}return queue.join("")};// re-export Token class to use in block rules
StateBlock.prototype.Token=Token;module.exports=StateBlock},{"../common/utils":4,"../token":51}],29:[function(require,module,exports){// GFM table, non-standard
'use strict';var isSpace=require("../common/utils").isSpace;function getLine(state,line){var pos=state.bMarks[line]+state.blkIndent,max=state.eMarks[line];return state.src.substr(pos,max-pos)}function escapedSplit(str){var result=[],pos=0,max=str.length,ch,escapes=0,lastPos=0,backTicked=!1,lastBackTick=0;ch=str.charCodeAt(pos);while(pos<max){if(96===ch/* ` */){if(backTicked){// make \` close code sequence, but not open it;
// the reason is: `\` is correct code block
backTicked=!1;lastBackTick=pos}else if(0===escapes%2){backTicked=!0;lastBackTick=pos}}else if(124===ch/* | */&&0===escapes%2&&!backTicked){result.push(str.substring(lastPos,pos));lastPos=pos+1}if(92===ch/* \ */){escapes++}else{escapes=0}pos++;// If there was an un-closed backtick, go back to just after
// the last backtick, but as if it was a normal character
if(pos===max&&backTicked){backTicked=!1;pos=lastBackTick+1}ch=str.charCodeAt(pos)}result.push(str.substring(lastPos));return result}module.exports=function table(state,startLine,endLine,silent){var ch,lineText,pos,i,nextLine,columns,columnCount,token,aligns,t,tableLines,tbodyLines;// should have at least two lines
if(startLine+2>endLine){return!1}nextLine=startLine+1;if(state.sCount[nextLine]<state.blkIndent){return!1}// if it's indented more than 3 spaces, it should be a code block
if(4<=state.sCount[nextLine]-state.blkIndent){return!1}// first character of the second line should be '|', '-', ':',
// and no other characters are allowed but spaces;
// basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp
pos=state.bMarks[nextLine]+state.tShift[nextLine];if(pos>=state.eMarks[nextLine]){return!1}ch=state.src.charCodeAt(pos++);if(124!==ch/* | */&&45!==ch/* - */&&58!==ch/* : */){return!1}while(pos<state.eMarks[nextLine]){ch=state.src.charCodeAt(pos);if(124!==ch/* | */&&45!==ch/* - */&&58!==ch/* : */&&!isSpace(ch)){return!1}pos++}lineText=getLine(state,startLine+1);columns=lineText.split("|");aligns=[];for(i=0;i<columns.length;i++){t=columns[i].trim();if(!t){// allow empty columns before and after table, but not in between columns;
// e.g. allow ` |---| `, disallow ` ---||--- `
if(0===i||i===columns.length-1){continue}else{return!1}}if(!/^:?-+:?$/.test(t)){return!1}if(58===t.charCodeAt(t.length-1)/* : */){aligns.push(58===t.charCodeAt(0)/* : */?"center":"right")}else if(58===t.charCodeAt(0)/* : */){aligns.push("left")}else{aligns.push("")}}lineText=getLine(state,startLine).trim();if(-1===lineText.indexOf("|")){return!1}if(4<=state.sCount[startLine]-state.blkIndent){return!1}columns=escapedSplit(lineText.replace(/^\||\|$/g,""));// header row will define an amount of columns in the entire table,
// and align row shouldn't be smaller than that (the rest of the rows can)
columnCount=columns.length;if(columnCount>aligns.length){return!1}if(silent){return!0}token=state.push("table_open","table",1);token.map=tableLines=[startLine,0];token=state.push("thead_open","thead",1);token.map=[startLine,startLine+1];token=state.push("tr_open","tr",1);token.map=[startLine,startLine+1];for(i=0;i<columns.length;i++){token=state.push("th_open","th",1);token.map=[startLine,startLine+1];if(aligns[i]){token.attrs=[["style","text-align:"+aligns[i]]]}token=state.push("inline","",0);token.content=columns[i].trim();token.map=[startLine,startLine+1];token.children=[];token=state.push("th_close","th",-1)}token=state.push("tr_close","tr",-1);token=state.push("thead_close","thead",-1);token=state.push("tbody_open","tbody",1);token.map=tbodyLines=[startLine+2,0];for(nextLine=startLine+2;nextLine<endLine;nextLine++){if(state.sCount[nextLine]<state.blkIndent){break}lineText=getLine(state,nextLine).trim();if(-1===lineText.indexOf("|")){break}if(4<=state.sCount[nextLine]-state.blkIndent){break}columns=escapedSplit(lineText.replace(/^\||\|$/g,""));token=state.push("tr_open","tr",1);for(i=0;i<columnCount;i++){token=state.push("td_open","td",1);if(aligns[i]){token.attrs=[["style","text-align:"+aligns[i]]]}token=state.push("inline","",0);token.content=columns[i]?columns[i].trim():"";token.children=[];token=state.push("td_close","td",-1)}token=state.push("tr_close","tr",-1)}token=state.push("tbody_close","tbody",-1);token=state.push("table_close","table",-1);tableLines[1]=tbodyLines[1]=nextLine;state.line=nextLine;return!0}},{"../common/utils":4}],30:[function(require,module,exports){'use strict';module.exports=function block(state){var token;if(state.inlineMode){token=new state.Token("inline","",0);token.content=state.src;token.map=[0,1];token.children=[];state.tokens.push(token)}else{state.md.block.parse(state.src,state.md,state.env,state.tokens)}}},{}],31:[function(require,module,exports){'use strict';module.exports=function inline(state){var tokens=state.tokens,tok,i,l;// Parse inlines
for(i=0,l=tokens.length;i<l;i++){tok=tokens[i];if("inline"===tok.type){state.md.inline.parse(tok.content,state.md,state.env,tok.children)}}}},{}],32:[function(require,module,exports){// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//
'use strict';var arrayReplaceAt=require("../common/utils").arrayReplaceAt;function isLinkOpen(str){return /^<a[>\s]/i.test(str)}function isLinkClose(str){return /^<\/a\s*>/i.test(str)}module.exports=function linkify(state){var i,j,l,tokens,token,currentToken,nodes,ln,text,pos,lastPos,level,htmlLinkLevel,url,fullUrl,urlText,blockTokens=state.tokens,links;if(!state.md.options.linkify){return}for(j=0,l=blockTokens.length;j<l;j++){if("inline"!==blockTokens[j].type||!state.md.linkify.pretest(blockTokens[j].content)){continue}tokens=blockTokens[j].children;htmlLinkLevel=0;// We scan from the end, to keep position when new tags added.
// Use reversed logic in links start/end match
for(i=tokens.length-1;0<=i;i--){currentToken=tokens[i];// Skip content of markdown links
if("link_close"===currentToken.type){i--;while(tokens[i].level!==currentToken.level&&"link_open"!==tokens[i].type){i--}continue}// Skip content of html tag links
if("html_inline"===currentToken.type){if(isLinkOpen(currentToken.content)&&0<htmlLinkLevel){htmlLinkLevel--}if(isLinkClose(currentToken.content)){htmlLinkLevel++}}if(0<htmlLinkLevel){continue}if("text"===currentToken.type&&state.md.linkify.test(currentToken.content)){text=currentToken.content;links=state.md.linkify.match(text);// Now split string to nodes
nodes=[];level=currentToken.level;lastPos=0;for(ln=0;ln<links.length;ln++){url=links[ln].url;fullUrl=state.md.normalizeLink(url);if(!state.md.validateLink(fullUrl)){continue}urlText=links[ln].text;// Linkifier might send raw hostnames like "example.com", where url
// starts with domain name. So we prepend http:// in those cases,
// and remove it afterwards.
//
if(!links[ln].schema){urlText=state.md.normalizeLinkText("http://"+urlText).replace(/^http:\/\//,"")}else if("mailto:"===links[ln].schema&&!/^mailto:/i.test(urlText)){urlText=state.md.normalizeLinkText("mailto:"+urlText).replace(/^mailto:/,"")}else{urlText=state.md.normalizeLinkText(urlText)}pos=links[ln].index;if(pos>lastPos){token=new state.Token("text","",0);token.content=text.slice(lastPos,pos);token.level=level;nodes.push(token)}token=new state.Token("link_open","a",1);token.attrs=[["href",fullUrl]];token.level=level++;token.markup="linkify";token.info="auto";nodes.push(token);token=new state.Token("text","",0);token.content=urlText;token.level=level;nodes.push(token);token=new state.Token("link_close","a",-1);token.level=--level;token.markup="linkify";token.info="auto";nodes.push(token);lastPos=links[ln].lastIndex}if(lastPos<text.length){token=new state.Token("text","",0);token.content=text.slice(lastPos);token.level=level;nodes.push(token)}// replace current node
blockTokens[j].children=tokens=arrayReplaceAt(tokens,i,nodes)}}}}},{"../common/utils":4}],33:[function(require,module,exports){// Normalize input string
'use strict';var NEWLINES_RE=/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,NULL_RE=/\u0000/g;module.exports=function normalize(state){var str;// Normalize newlines
str=state.src.replace(NEWLINES_RE,"\n");// Replace NULL characters
str=str.replace(NULL_RE,"\uFFFD");state.src=str}},{}],34:[function(require,module,exports){// Simple typographic replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//
'use strict';// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4
var RARE_RE=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,SCOPED_ABBR_TEST_RE=/\((c|tm|r|p)\)/i,SCOPED_ABBR_RE=/\((c|tm|r|p)\)/ig,SCOPED_ABBR={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
function replaceFn(match,name){return SCOPED_ABBR[name.toLowerCase()]}function replace_scoped(inlineTokens){var i,token,inside_autolink=0;for(i=inlineTokens.length-1;0<=i;i--){token=inlineTokens[i];if("text"===token.type&&!inside_autolink){token.content=token.content.replace(SCOPED_ABBR_RE,replaceFn)}if("link_open"===token.type&&"auto"===token.info){inside_autolink--}if("link_close"===token.type&&"auto"===token.info){inside_autolink++}}}function replace_rare(inlineTokens){var i,token,inside_autolink=0;for(i=inlineTokens.length-1;0<=i;i--){token=inlineTokens[i];if("text"===token.type&&!inside_autolink){if(RARE_RE.test(token.content)){token.content=token.content.replace(/\+-/g,"\xB1")// .., ..., ....... -> …
// but ?..... & !..... -> ?.. & !..
.replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",")// em-dash
.replace(/(^|[^-])---([^-]|$)/mg,"$1\u2014$2")// en-dash
.replace(/(^|\s)--(\s|$)/mg,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg,"$1\u2013$2")}}if("link_open"===token.type&&"auto"===token.info){inside_autolink--}if("link_close"===token.type&&"auto"===token.info){inside_autolink++}}}module.exports=function replace(state){var blkIdx;if(!state.md.options.typographer){return}for(blkIdx=state.tokens.length-1;0<=blkIdx;blkIdx--){if("inline"!==state.tokens[blkIdx].type){continue}if(SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)){replace_scoped(state.tokens[blkIdx].children)}if(RARE_RE.test(state.tokens[blkIdx].content)){replace_rare(state.tokens[blkIdx].children)}}}},{}],35:[function(require,module,exports){// Convert straight quotation marks to typographic ones
//
'use strict';var isWhiteSpace=require("../common/utils").isWhiteSpace,isPunctChar=require("../common/utils").isPunctChar,isMdAsciiPunct=require("../common/utils").isMdAsciiPunct,QUOTE_TEST_RE=/['"]/,QUOTE_RE=/['"]/g,APOSTROPHE="\u2019";/* ’ */function replaceAt(str,index,ch){return str.substr(0,index)+ch+str.substr(index+1)}function process_inlines(tokens,state){var i,token,text,t,pos,max,thisLevel,item,lastChar,nextChar,isLastPunctChar,isNextPunctChar,isLastWhiteSpace,isNextWhiteSpace,canOpen,canClose,j,isSingle,stack,openQuote,closeQuote;stack=[];for(i=0;i<tokens.length;i++){token=tokens[i];thisLevel=tokens[i].level;for(j=stack.length-1;0<=j;j--){if(stack[j].level<=thisLevel){break}}stack.length=j+1;if("text"!==token.type){continue}text=token.content;pos=0;max=text.length;/*eslint no-labels:0,block-scoped-var:0*/OUTER:while(pos<max){QUOTE_RE.lastIndex=pos;t=QUOTE_RE.exec(text);if(!t){break}canOpen=canClose=!0;pos=t.index+1;isSingle="'"===t[0];// Find previous character,
// default to space if it's the beginning of the line
//
lastChar=32;if(0<=t.index-1){lastChar=text.charCodeAt(t.index-1)}else{for(j=i-1;0<=j;j--){if("softbreak"===tokens[j].type||"hardbreak"===tokens[j].type)break;// lastChar defaults to 0x20
if("text"!==tokens[j].type)continue;lastChar=tokens[j].content.charCodeAt(tokens[j].content.length-1);break}}// Find next character,
// default to space if it's the end of the line
//
nextChar=32;if(pos<max){nextChar=text.charCodeAt(pos)}else{for(j=i+1;j<tokens.length;j++){if("softbreak"===tokens[j].type||"hardbreak"===tokens[j].type)break;// nextChar defaults to 0x20
if("text"!==tokens[j].type)continue;nextChar=tokens[j].content.charCodeAt(0);break}}isLastPunctChar=isMdAsciiPunct(lastChar)||isPunctChar(String.fromCharCode(lastChar));isNextPunctChar=isMdAsciiPunct(nextChar)||isPunctChar(String.fromCharCode(nextChar));isLastWhiteSpace=isWhiteSpace(lastChar);isNextWhiteSpace=isWhiteSpace(nextChar);if(isNextWhiteSpace){canOpen=!1}else if(isNextPunctChar){if(!(isLastWhiteSpace||isLastPunctChar)){canOpen=!1}}if(isLastWhiteSpace){canClose=!1}else if(isLastPunctChar){if(!(isNextWhiteSpace||isNextPunctChar)){canClose=!1}}if(34===nextChar/* " */&&"\""===t[0]){if(48<=lastChar/* 0 */&&57>=lastChar/* 9 */){// special case: 1"" - count first quote as an inch
canClose=canOpen=!1}}if(canOpen&&canClose){// treat this as the middle of the word
canOpen=!1;canClose=isNextPunctChar}if(!canOpen&&!canClose){// middle of word
if(isSingle){token.content=replaceAt(token.content,t.index,APOSTROPHE)}continue}if(canClose){// this could be a closing quote, rewind the stack to get a match
for(j=stack.length-1;0<=j;j--){item=stack[j];if(stack[j].level<thisLevel){break}if(item.single===isSingle&&stack[j].level===thisLevel){item=stack[j];if(isSingle){openQuote=state.md.options.quotes[2];closeQuote=state.md.options.quotes[3]}else{openQuote=state.md.options.quotes[0];closeQuote=state.md.options.quotes[1]}// replace token.content *before* tokens[item.token].content,
// because, if they are pointing at the same token, replaceAt
// could mess up indices when quote length != 1
token.content=replaceAt(token.content,t.index,closeQuote);tokens[item.token].content=replaceAt(tokens[item.token].content,item.pos,openQuote);pos+=closeQuote.length-1;if(item.token===i){pos+=openQuote.length-1}text=token.content;max=text.length;stack.length=j;continue OUTER}}}if(canOpen){stack.push({token:i,pos:t.index,single:isSingle,level:thisLevel})}else if(canClose&&isSingle){token.content=replaceAt(token.content,t.index,APOSTROPHE)}}}}module.exports=function smartquotes(state){/*eslint max-depth:0*/var blkIdx;if(!state.md.options.typographer){return}for(blkIdx=state.tokens.length-1;0<=blkIdx;blkIdx--){if("inline"!==state.tokens[blkIdx].type||!QUOTE_TEST_RE.test(state.tokens[blkIdx].content)){continue}process_inlines(state.tokens[blkIdx].children,state)}}},{"../common/utils":4}],36:[function(require,module,exports){// Core state object
//
'use strict';var Token=require("../token");function StateCore(src,md,env){this.src=src;this.env=env;this.tokens=[];this.inlineMode=!1;this.md=md;// link to parser instance
}// re-export Token class to use in core rules
StateCore.prototype.Token=Token;module.exports=StateCore},{"../token":51}],37:[function(require,module,exports){// Process autolinks '<protocol:...>'
'use strict';/*eslint max-len:0*/var EMAIL_RE=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,AUTOLINK_RE=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;module.exports=function autolink(state,silent){var tail,linkMatch,emailMatch,url,fullUrl,token,pos=state.pos;if(60!==state.src.charCodeAt(pos)/* < */){return!1}tail=state.src.slice(pos);if(0>tail.indexOf(">")){return!1}if(AUTOLINK_RE.test(tail)){linkMatch=tail.match(AUTOLINK_RE);url=linkMatch[0].slice(1,-1);fullUrl=state.md.normalizeLink(url);if(!state.md.validateLink(fullUrl)){return!1}if(!silent){token=state.push("link_open","a",1);token.attrs=[["href",fullUrl]];token.markup="autolink";token.info="auto";token=state.push("text","",0);token.content=state.md.normalizeLinkText(url);token=state.push("link_close","a",-1);token.markup="autolink";token.info="auto"}state.pos+=linkMatch[0].length;return!0}if(EMAIL_RE.test(tail)){emailMatch=tail.match(EMAIL_RE);url=emailMatch[0].slice(1,-1);fullUrl=state.md.normalizeLink("mailto:"+url);if(!state.md.validateLink(fullUrl)){return!1}if(!silent){token=state.push("link_open","a",1);token.attrs=[["href",fullUrl]];token.markup="autolink";token.info="auto";token=state.push("text","",0);token.content=state.md.normalizeLinkText(url);token=state.push("link_close","a",-1);token.markup="autolink";token.info="auto"}state.pos+=emailMatch[0].length;return!0}return!1}},{}],38:[function(require,module,exports){// Parse backticks
'use strict';module.exports=function backtick(state,silent){var start,max,marker,matchStart,matchEnd,token,pos=state.pos,ch=state.src.charCodeAt(pos);if(96!==ch/* ` */){return!1}start=pos;pos++;max=state.posMax;while(pos<max&&96===state.src.charCodeAt(pos)/* ` */){pos++}marker=state.src.slice(start,pos);matchStart=matchEnd=pos;while(-1!==(matchStart=state.src.indexOf("`",matchEnd))){matchEnd=matchStart+1;while(matchEnd<max&&96===state.src.charCodeAt(matchEnd)/* ` */){matchEnd++}if(matchEnd-matchStart===marker.length){if(!silent){token=state.push("code_inline","code",0);token.markup=marker;token.content=state.src.slice(pos,matchStart).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}state.pos=matchEnd;return!0}}if(!silent){state.pending+=marker}state.pos+=marker.length;return!0}},{}],39:[function(require,module,exports){// For each opening emphasis-like marker find a matching closing one
//
'use strict';module.exports=function link_pairs(state){var i,j,lastDelim,currDelim,delimiters=state.delimiters,max=state.delimiters.length;for(i=0;i<max;i++){lastDelim=delimiters[i];if(!lastDelim.close){continue}j=i-lastDelim.jump-1;while(0<=j){currDelim=delimiters[j];if(currDelim.open&&currDelim.marker===lastDelim.marker&&0>currDelim.end&&currDelim.level===lastDelim.level){var odd_match=!1;// typeofs are for backward compatibility with plugins
if((currDelim.close||lastDelim.open)&&"undefined"!==typeof currDelim.length&&"undefined"!==typeof lastDelim.length){// from spec:
// sum of the lengths [...] must not be a multiple of 3
// unless both lengths are multiples of 3
if(0===(currDelim.length+lastDelim.length)%3){if(0!==currDelim.length%3||0!==lastDelim.length%3){odd_match=!0}}}if(!odd_match){lastDelim.jump=i-j;lastDelim.open=!1;currDelim.end=i;currDelim.jump=0;break}}j-=currDelim.jump+1}}}},{}],40:[function(require,module,exports){// Process *this* and _that_
//
'use strict';// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize=function emphasis(state,silent){var i,scanned,token,start=state.pos,marker=state.src.charCodeAt(start);if(silent){return!1}if(95!==marker/* _ */&&42!==marker/* * */){return!1}scanned=state.scanDelims(state.pos,42===marker);for(i=0;i<scanned.length;i++){token=state.push("text","",0);token.content=String.fromCharCode(marker);state.delimiters.push({// Char code of the starting marker (number).
//
marker:marker,// Total length of these series of delimiters.
//
length:scanned.length,// An amount of characters before this one that's equivalent to
// current one. In plain English: if this delimiter does not open
// an emphasis, neither do previous `jump` characters.
//
// Used to skip sequences like "*****" in one step, for 1st asterisk
// value will be 0, for 2nd it's 1 and so on.
//
jump:i,// A position of the token this delimiter corresponds to.
//
token:state.tokens.length-1,// Token level.
//
level:state.level,// If this delimiter is matched as a valid opener, `end` will be
// equal to its position, otherwise it's `-1`.
//
end:-1,// Boolean flags that determine if this delimiter could open or close
// an emphasis.
//
open:scanned.can_open,close:scanned.can_close})}state.pos+=scanned.length;return!0};// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess=function emphasis(state){var i,startDelim,endDelim,token,ch,isStrong,delimiters=state.delimiters,max=state.delimiters.length;for(i=max-1;0<=i;i--){startDelim=delimiters[i];if(95!==startDelim.marker/* _ */&&42!==startDelim.marker/* * */){continue}// Process only opening markers
if(-1===startDelim.end){continue}endDelim=delimiters[startDelim.end];// If the previous delimiter has the same marker and is adjacent to this one,
// merge those into one strong delimiter.
//
// `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
//
isStrong=0<i&&delimiters[i-1].end===startDelim.end+1&&delimiters[i-1].token===startDelim.token-1&&delimiters[startDelim.end+1].token===endDelim.token+1&&delimiters[i-1].marker===startDelim.marker;ch=String.fromCharCode(startDelim.marker);token=state.tokens[startDelim.token];token.type=isStrong?"strong_open":"em_open";token.tag=isStrong?"strong":"em";token.nesting=1;token.markup=isStrong?ch+ch:ch;token.content="";token=state.tokens[endDelim.token];token.type=isStrong?"strong_close":"em_close";token.tag=isStrong?"strong":"em";token.nesting=-1;token.markup=isStrong?ch+ch:ch;token.content="";if(isStrong){state.tokens[delimiters[i-1].token].content="";state.tokens[delimiters[startDelim.end+1].token].content="";i--}}}},{}],41:[function(require,module,exports){// Process html entity - &#123;, &#xAF;, &quot;, ...
'use strict';var entities=require("../common/entities"),has=require("../common/utils").has,isValidEntityCode=require("../common/utils").isValidEntityCode,fromCodePoint=require("../common/utils").fromCodePoint,DIGITAL_RE=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,NAMED_RE=/^&([a-z][a-z0-9]{1,31});/i;module.exports=function entity(state,silent){var ch,code,match,pos=state.pos,max=state.posMax;if(38!==state.src.charCodeAt(pos)/* & */){return!1}if(pos+1<max){ch=state.src.charCodeAt(pos+1);if(35===ch/* # */){match=state.src.slice(pos).match(DIGITAL_RE);if(match){if(!silent){code="x"===match[1][0].toLowerCase()?parseInt(match[1].slice(1),16):parseInt(match[1],10);state.pending+=isValidEntityCode(code)?fromCodePoint(code):fromCodePoint(65533)}state.pos+=match[0].length;return!0}}else{match=state.src.slice(pos).match(NAMED_RE);if(match){if(has(entities,match[1])){if(!silent){state.pending+=entities[match[1]]}state.pos+=match[0].length;return!0}}}}if(!silent){state.pending+="&"}state.pos++;return!0}},{"../common/entities":1,"../common/utils":4}],42:[function(require,module,exports){// Process escaped chars and hardbreaks
'use strict';for(var isSpace=require("../common/utils").isSpace,ESCAPED=[],i=0;256>i;i++){ESCAPED.push(0)}"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch){ESCAPED[ch.charCodeAt(0)]=1});module.exports=function escape(state,silent){var ch,pos=state.pos,max=state.posMax;if(92!==state.src.charCodeAt(pos)/* \ */){return!1}pos++;if(pos<max){ch=state.src.charCodeAt(pos);if(256>ch&&0!==ESCAPED[ch]){if(!silent){state.pending+=state.src[pos]}state.pos+=2;return!0}if(10===ch){if(!silent){state.push("hardbreak","br",0)}pos++;// skip leading whitespaces from next line
while(pos<max){ch=state.src.charCodeAt(pos);if(!isSpace(ch)){break}pos++}state.pos=pos;return!0}}if(!silent){state.pending+="\\"}state.pos++;return!0}},{"../common/utils":4}],43:[function(require,module,exports){// Process html tags
'use strict';var HTML_TAG_RE=require("../common/html_re").HTML_TAG_RE;function isLetter(ch){/*eslint no-bitwise:0*/var lc=32|ch;// to lower case
return 97<=lc/* a */&&122>=lc/* z */}module.exports=function html_inline(state,silent){var ch,match,max,token,pos=state.pos;if(!state.md.options.html){return!1}// Check start
max=state.posMax;if(60!==state.src.charCodeAt(pos)/* < */||pos+2>=max){return!1}// Quick fail on second char
ch=state.src.charCodeAt(pos+1);if(33!==ch/* ! */&&63!==ch/* ? */&&47!==ch/* / */&&!isLetter(ch)){return!1}match=state.src.slice(pos).match(HTML_TAG_RE);if(!match){return!1}if(!silent){token=state.push("html_inline","",0);token.content=state.src.slice(pos,pos+match[0].length)}state.pos+=match[0].length;return!0}},{"../common/html_re":3}],44:[function(require,module,exports){// Process ![image](<src> "title")
'use strict';var normalizeReference=require("../common/utils").normalizeReference,isSpace=require("../common/utils").isSpace;module.exports=function image(state,silent){var attrs,code,content,label,labelEnd,labelStart,pos,ref,res,title,token,tokens,start,href="",oldPos=state.pos,max=state.posMax;if(33!==state.src.charCodeAt(state.pos)/* ! */){return!1}if(91!==state.src.charCodeAt(state.pos+1)/* [ */){return!1}labelStart=state.pos+2;labelEnd=state.md.helpers.parseLinkLabel(state,state.pos+1,!1);// parser failed to find ']', so it's not a valid link
if(0>labelEnd){return!1}pos=labelEnd+1;if(pos<max&&40===state.src.charCodeAt(pos)/* ( */){//
// Inline link
//
// [link](  <href>  "title"  )
//        ^^ skipping these spaces
pos++;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&10!==code){break}}if(pos>=max){return!1}// [link](  <href>  "title"  )
//          ^^^^^^ parsing link destination
start=pos;res=state.md.helpers.parseLinkDestination(state.src,pos,state.posMax);if(res.ok){href=state.md.normalizeLink(res.str);if(state.md.validateLink(href)){pos=res.pos}else{href=""}}// [link](  <href>  "title"  )
//                ^^ skipping these spaces
start=pos;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&10!==code){break}}// [link](  <href>  "title"  )
//                  ^^^^^^^ parsing link title
res=state.md.helpers.parseLinkTitle(state.src,pos,state.posMax);if(pos<max&&start!==pos&&res.ok){title=res.str;pos=res.pos;// [link](  <href>  "title"  )
//                         ^^ skipping these spaces
for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&10!==code){break}}}else{title=""}if(pos>=max||41!==state.src.charCodeAt(pos)/* ) */){state.pos=oldPos;return!1}pos++}else{//
// Link reference
//
if("undefined"===typeof state.env.references){return!1}if(pos<max&&91===state.src.charCodeAt(pos)/* [ */){start=pos+1;pos=state.md.helpers.parseLinkLabel(state,pos);if(0<=pos){label=state.src.slice(start,pos++)}else{pos=labelEnd+1}}else{pos=labelEnd+1}// covers label === '' and label === undefined
// (collapsed reference link and shortcut reference link respectively)
if(!label){label=state.src.slice(labelStart,labelEnd)}ref=state.env.references[normalizeReference(label)];if(!ref){state.pos=oldPos;return!1}href=ref.href;title=ref.title}//
// We found the end of the link, and know for a fact it's a valid link;
// so all that's left to do is to call tokenizer.
//
if(!silent){content=state.src.slice(labelStart,labelEnd);state.md.inline.parse(content,state.md,state.env,tokens=[]);token=state.push("image","img",0);token.attrs=attrs=[["src",href],["alt",""]];token.children=tokens;token.content=content;if(title){attrs.push(["title",title])}}state.pos=pos;state.posMax=max;return!0}},{"../common/utils":4}],45:[function(require,module,exports){// Process [link](<to> "stuff")
'use strict';var normalizeReference=require("../common/utils").normalizeReference,isSpace=require("../common/utils").isSpace;module.exports=function link(state,silent){var attrs,code,label,labelEnd,labelStart,pos,res,ref,title,token,href="",oldPos=state.pos,max=state.posMax,start=state.pos,parseReference=!0;if(91!==state.src.charCodeAt(state.pos)/* [ */){return!1}labelStart=state.pos+1;labelEnd=state.md.helpers.parseLinkLabel(state,state.pos,!0);// parser failed to find ']', so it's not a valid link
if(0>labelEnd){return!1}pos=labelEnd+1;if(pos<max&&40===state.src.charCodeAt(pos)/* ( */){//
// Inline link
//
// might have found a valid shortcut link, disable reference parsing
parseReference=!1;// [link](  <href>  "title"  )
//        ^^ skipping these spaces
pos++;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&10!==code){break}}if(pos>=max){return!1}// [link](  <href>  "title"  )
//          ^^^^^^ parsing link destination
start=pos;res=state.md.helpers.parseLinkDestination(state.src,pos,state.posMax);if(res.ok){href=state.md.normalizeLink(res.str);if(state.md.validateLink(href)){pos=res.pos}else{href=""}}// [link](  <href>  "title"  )
//                ^^ skipping these spaces
start=pos;for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&10!==code){break}}// [link](  <href>  "title"  )
//                  ^^^^^^^ parsing link title
res=state.md.helpers.parseLinkTitle(state.src,pos,state.posMax);if(pos<max&&start!==pos&&res.ok){title=res.str;pos=res.pos;// [link](  <href>  "title"  )
//                         ^^ skipping these spaces
for(;pos<max;pos++){code=state.src.charCodeAt(pos);if(!isSpace(code)&&10!==code){break}}}else{title=""}if(pos>=max||41!==state.src.charCodeAt(pos)/* ) */){// parsing a valid shortcut link failed, fallback to reference
parseReference=!0}pos++}if(parseReference){//
// Link reference
//
if("undefined"===typeof state.env.references){return!1}if(pos<max&&91===state.src.charCodeAt(pos)/* [ */){start=pos+1;pos=state.md.helpers.parseLinkLabel(state,pos);if(0<=pos){label=state.src.slice(start,pos++)}else{pos=labelEnd+1}}else{pos=labelEnd+1}// covers label === '' and label === undefined
// (collapsed reference link and shortcut reference link respectively)
if(!label){label=state.src.slice(labelStart,labelEnd)}ref=state.env.references[normalizeReference(label)];if(!ref){state.pos=oldPos;return!1}href=ref.href;title=ref.title}//
// We found the end of the link, and know for a fact it's a valid link;
// so all that's left to do is to call tokenizer.
//
if(!silent){state.pos=labelStart;state.posMax=labelEnd;token=state.push("link_open","a",1);token.attrs=attrs=[["href",href]];if(title){attrs.push(["title",title])}state.md.inline.tokenize(state);token=state.push("link_close","a",-1)}state.pos=pos;state.posMax=max;return!0}},{"../common/utils":4}],46:[function(require,module,exports){// Proceess '\n'
'use strict';var isSpace=require("../common/utils").isSpace;module.exports=function newline(state,silent){var pmax,max,pos=state.pos;if(10!==state.src.charCodeAt(pos)/* \n */){return!1}pmax=state.pending.length-1;max=state.posMax;// '  \n' -> hardbreak
// Lookup in pending chars is bad practice! Don't copy to other rules!
// Pending string is stored in concat mode, indexed lookups will cause
// convertion to flat mode.
if(!silent){if(0<=pmax&&32===state.pending.charCodeAt(pmax)){if(1<=pmax&&32===state.pending.charCodeAt(pmax-1)){state.pending=state.pending.replace(/ +$/,"");state.push("hardbreak","br",0)}else{state.pending=state.pending.slice(0,-1);state.push("softbreak","br",0)}}else{state.push("softbreak","br",0)}}pos++;// skip heading spaces for next line
while(pos<max&&isSpace(state.src.charCodeAt(pos))){pos++}state.pos=pos;return!0}},{"../common/utils":4}],47:[function(require,module,exports){// Inline parser state
'use strict';var Token=require("../token"),isWhiteSpace=require("../common/utils").isWhiteSpace,isPunctChar=require("../common/utils").isPunctChar,isMdAsciiPunct=require("../common/utils").isMdAsciiPunct;function StateInline(src,md,env,outTokens){this.src=src;this.env=env;this.md=md;this.tokens=outTokens;this.pos=0;this.posMax=this.src.length;this.level=0;this.pending="";this.pendingLevel=0;this.cache={};// Stores { start: end } pairs. Useful for backtrack
// optimization of pairs parse (emphasis, strikes).
this.delimiters=[];// Emphasis-like delimiters
}// Flush pending text
//
StateInline.prototype.pushPending=function(){var token=new Token("text","",0);token.content=this.pending;token.level=this.pendingLevel;this.tokens.push(token);this.pending="";return token};// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push=function(type,tag,nesting){if(this.pending){this.pushPending()}var token=new Token(type,tag,nesting);if(0>nesting)this.level--;// closing tag
token.level=this.level;if(0<nesting)this.level++;// opening tag
this.pendingLevel=this.level;this.tokens.push(token);return token};// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims=function(start,canSplitWord){var pos=start,lastChar,nextChar,count,can_open,can_close,isLastWhiteSpace,isLastPunctChar,isNextWhiteSpace,isNextPunctChar,left_flanking=!0,right_flanking=!0,max=this.posMax,marker=this.src.charCodeAt(start);// treat beginning of the line as a whitespace
lastChar=0<start?this.src.charCodeAt(start-1):32;while(pos<max&&this.src.charCodeAt(pos)===marker){pos++}count=pos-start;// treat end of the line as a whitespace
nextChar=pos<max?this.src.charCodeAt(pos):32;isLastPunctChar=isMdAsciiPunct(lastChar)||isPunctChar(String.fromCharCode(lastChar));isNextPunctChar=isMdAsciiPunct(nextChar)||isPunctChar(String.fromCharCode(nextChar));isLastWhiteSpace=isWhiteSpace(lastChar);isNextWhiteSpace=isWhiteSpace(nextChar);if(isNextWhiteSpace){left_flanking=!1}else if(isNextPunctChar){if(!(isLastWhiteSpace||isLastPunctChar)){left_flanking=!1}}if(isLastWhiteSpace){right_flanking=!1}else if(isLastPunctChar){if(!(isNextWhiteSpace||isNextPunctChar)){right_flanking=!1}}if(!canSplitWord){can_open=left_flanking&&(!right_flanking||isLastPunctChar);can_close=right_flanking&&(!left_flanking||isNextPunctChar)}else{can_open=left_flanking;can_close=right_flanking}return{can_open:can_open,can_close:can_close,length:count}};// re-export Token class to use in block rules
StateInline.prototype.Token=Token;module.exports=StateInline},{"../common/utils":4,"../token":51}],48:[function(require,module,exports){// ~~strike through~~
//
'use strict';// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize=function strikethrough(state,silent){var i,scanned,token,len,ch,start=state.pos,marker=state.src.charCodeAt(start);if(silent){return!1}if(126!==marker/* ~ */){return!1}scanned=state.scanDelims(state.pos,!0);len=scanned.length;ch=String.fromCharCode(marker);if(2>len){return!1}if(len%2){token=state.push("text","",0);token.content=ch;len--}for(i=0;i<len;i+=2){token=state.push("text","",0);token.content=ch+ch;state.delimiters.push({marker:marker,jump:i,token:state.tokens.length-1,level:state.level,end:-1,open:scanned.can_open,close:scanned.can_close})}state.pos+=scanned.length;return!0};// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess=function strikethrough(state){var i,j,startDelim,endDelim,token,loneMarkers=[],delimiters=state.delimiters,max=state.delimiters.length;for(i=0;i<max;i++){startDelim=delimiters[i];if(126!==startDelim.marker/* ~ */){continue}if(-1===startDelim.end){continue}endDelim=delimiters[startDelim.end];token=state.tokens[startDelim.token];token.type="s_open";token.tag="s";token.nesting=1;token.markup="~~";token.content="";token=state.tokens[endDelim.token];token.type="s_close";token.tag="s";token.nesting=-1;token.markup="~~";token.content="";if("text"===state.tokens[endDelim.token-1].type&&"~"===state.tokens[endDelim.token-1].content){loneMarkers.push(endDelim.token-1)}}// If a marker sequence has an odd number of characters, it's splitted
// like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
// start of the sequence.
//
// So, we have to move all those markers after subsequent s_close tags.
//
while(loneMarkers.length){i=loneMarkers.pop();j=i+1;while(j<state.tokens.length&&"s_close"===state.tokens[j].type){j++}j--;if(i!==j){token=state.tokens[j];state.tokens[j]=state.tokens[i];state.tokens[i]=token}}}},{}],49:[function(require,module,exports){// Skip text characters for text token, place those to pending buffer
// and increment current pos
'use strict';// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch){switch(ch){case 10/* \n */:case 33/* ! */:case 35/* # */:case 36/* $ */:case 37/* % */:case 38/* & */:case 42/* * */:case 43/* + */:case 45/* - */:case 58/* : */:case 60/* < */:case 61/* = */:case 62/* > */:case 64/* @ */:case 91/* [ */:case 92/* \ */:case 93/* ] */:case 94/* ^ */:case 95/* _ */:case 96/* ` */:case 123/* { */:case 125/* } */:case 126/* ~ */:return!0;default:return!1;}}module.exports=function text(state,silent){var pos=state.pos;while(pos<state.posMax&&!isTerminatorChar(state.src.charCodeAt(pos))){pos++}if(pos===state.pos){return!1}if(!silent){state.pending+=state.src.slice(state.pos,pos)}state.pos=pos;return!0};// Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.
/*
      var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;
      
      module.exports = function text(state, silent) {
        var pos = state.pos,
            idx = state.src.slice(pos).search(TERMINATOR_RE);
      
        // first char is terminator -> empty text
        if (idx === 0) { return false; }
      
        // no terminator -> text till end of string
        if (idx < 0) {
          if (!silent) { state.pending += state.src.slice(pos); }
          state.pos = state.src.length;
          return true;
        }
      
        if (!silent) { state.pending += state.src.slice(pos, pos + idx); }
      
        state.pos += idx;
      
        return true;
      };*/},{}],50:[function(require,module,exports){// Clean up tokens after emphasis and strikethrough postprocessing:
// merge adjacent text nodes into one and re-calculate all token levels
//
// This is necessary because initially emphasis delimiter markers (*, _, ~)
// are treated as their own separate text tokens. Then emphasis rule either
// leaves them as text (needed to merge with adjacent text) or turns them
// into opening/closing tags (which messes up levels inside).
//
'use strict';module.exports=function text_collapse(state){var curr,last,level=0,tokens=state.tokens,max=state.tokens.length;for(curr=last=0;curr<max;curr++){// re-calculate levels after emphasis/strikethrough turns some text nodes
// into opening/closing tags
if(0>tokens[curr].nesting)level--;// closing tag
tokens[curr].level=level;if(0<tokens[curr].nesting)level++;// opening tag
if("text"===tokens[curr].type&&curr+1<max&&"text"===tokens[curr+1].type){// collapse two adjacent text nodes
tokens[curr+1].content=tokens[curr].content+tokens[curr+1].content}else{if(curr!==last){tokens[last]=tokens[curr]}last++}}if(curr!==last){tokens.length=last}}},{}],51:[function(require,module,exports){// Token class
'use strict';/**
                     * class Token
                     **/ /**
                          * new Token(type, tag, nesting)
                          *
                          * Create new token and fill passed properties.
                          **/function Token(type,tag,nesting){/**
         * Token#type -> String
         *
         * Type of the token (string, e.g. "paragraph_open")
         **/this.type=type;/**
                               * Token#tag -> String
                               *
                               * html tag name, e.g. "p"
                               **/this.tag=tag;/**
                         * Token#attrs -> Array
                         *
                         * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
                         **/this.attrs=null;/**
                            * Token#map -> Array
                            *
                            * Source map info. Format: `[ line_begin, line_end ]`
                            **/this.map=null;/**
                          * Token#nesting -> Number
                          *
                          * Level change (number in {-1, 0, 1} set), where:
                          *
                          * -  `1` means the tag is opening
                          * -  `0` means the tag is self-closing
                          * - `-1` means the tag is closing
                          **/this.nesting=nesting;/**
                                 * Token#level -> Number
                                 *
                                 * nesting level, the same as `state.level`
                                 **/this.level=0;/**
                         * Token#children -> Array
                         *
                         * An array of child nodes (inline and img tokens)
                         **/this.children=null;/**
                               * Token#content -> String
                               *
                               * In a case of self-closing tag (code, html, fence, etc.),
                               * it has contents of this tag.
                               **/this.content="";/**
                            * Token#markup -> String
                            *
                            * '*' or '_' for emphasis, fence string for fence, etc.
                            **/this.markup="";/**
                           * Token#info -> String
                           *
                           * fence infostring
                           **/this.info="";/**
                         * Token#meta -> Object
                         *
                         * A place for plugins to store an arbitrary data
                         **/this.meta=null;/**
                           * Token#block -> Boolean
                           *
                           * True for block-level tokens, false for inline tokens.
                           * Used in renderer to calculate line breaks
                           **/this.block=!1;/**
                             * Token#hidden -> Boolean
                             *
                             * If it's true, ignore this element when rendering. Used for tight lists
                             * to hide paragraphs.
                             **/this.hidden=!1}/**
         * Token.attrIndex(name) -> Number
         *
         * Search attribute index by name.
         **/Token.prototype.attrIndex=function attrIndex(name){var attrs,i,len;if(!this.attrs){return-1}attrs=this.attrs;for(i=0,len=attrs.length;i<len;i++){if(attrs[i][0]===name){return i}}return-1};/**
          * Token.attrPush(attrData)
          *
          * Add `[ name, value ]` attribute to list. Init attrs if necessary
          **/Token.prototype.attrPush=function attrPush(attrData){if(this.attrs){this.attrs.push(attrData)}else{this.attrs=[attrData]}};/**
          * Token.attrSet(name, value)
          *
          * Set `name` attribute to `value`. Override old value if exists.
          **/Token.prototype.attrSet=function attrSet(name,value){var idx=this.attrIndex(name),attrData=[name,value];if(0>idx){this.attrPush(attrData)}else{this.attrs[idx]=attrData}};/**
          * Token.attrGet(name)
          *
          * Get the value of attribute `name`, or null if it does not exist.
          **/Token.prototype.attrGet=function attrGet(name){var idx=this.attrIndex(name),value=null;if(0<=idx){value=this.attrs[idx][1]}return value};/**
          * Token.attrJoin(name, value)
          *
          * Join value to existing attribute via space. Or create new attribute if not
          * exists. Useful to operate with token classes.
          **/Token.prototype.attrJoin=function attrJoin(name,value){var idx=this.attrIndex(name);if(0>idx){this.attrPush([name,value])}else{this.attrs[idx][1]=this.attrs[idx][1]+" "+value}};module.exports=Token},{}],52:[function(require,module,exports){module.exports={Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\uD835\uDD04",afr:"\uD835\uDD1E",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",amp:"&",AMP:"&",andand:"\u2A55",And:"\u2A53",and:"\u2227",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angmsd:"\u2221",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\uD835\uDD38",aopf:"\uD835\uDD52",apacir:"\u2A6F",ap:"\u2248",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\uD835\uDC9C",ascr:"\uD835\uDCB6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\uD835\uDD05",bfr:"\uD835\uDD1F",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\uD835\uDD39",bopf:"\uD835\uDD53",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250C",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252C",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxul:"\u2518",boxuL:"\u255B",boxUl:"\u255C",boxUL:"\u255D",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255A",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253C",boxvH:"\u256A",boxVh:"\u256B",boxVH:"\u256C",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251C",boxvR:"\u255E",boxVr:"\u255F",boxVR:"\u2560",bprime:"\u2035",breve:"\u02D8",Breve:"\u02D8",brvbar:"\xA6",bscr:"\uD835\uDCB7",Bscr:"\u212C",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsolb:"\u29C5",bsol:"\\",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",cap:"\u2229",Cap:"\u22D2",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",centerdot:"\xB7",CenterDot:"\xB7",cfr:"\uD835\uDD20",Cfr:"\u212D",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25CB",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",conint:"\u222E",Conint:"\u222F",ContourIntegral:"\u222E",copf:"\uD835\uDD54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xA9",COPY:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",cross:"\u2717",Cross:"\u2A2F",Cscr:"\uD835\uDC9E",cscr:"\uD835\uDCB8",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",cupbrcap:"\u2A48",cupcap:"\u2A46",CupCap:"\u224D",cup:"\u222A",Cup:"\u22D3",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21A1",dArr:"\u21D3",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21CA",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\uD835\uDD07",dfr:"\uD835\uDD21",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",diamond:"\u22C4",Diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\uD835\uDD3B",dopf:"\uD835\uDD55",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21D3",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21BD",DownRightTeeVector:"\u295F",DownRightVectorBar:"\u2957",DownRightVector:"\u21C1",DownTeeArrow:"\u21A7",DownTee:"\u22A4",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\uD835\uDC9F",dscr:"\uD835\uDCB9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",Ecirc:"\xCA",ecirc:"\xEA",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\uD835\uDD08",efr:"\uD835\uDD22",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\uD835\uDD3C",eopf:"\uD835\uDD56",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",escr:"\u212F",Escr:"\u2130",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\uD835\uDD09",ffr:"\uD835\uDD23",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\uD835\uDD3D",fopf:"\uD835\uDD57",forall:"\u2200",ForAll:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",fscr:"\uD835\uDCBB",Fscr:"\u2131",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",gescc:"\u2AA9",ges:"\u2A7E",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\uD835\uDD0A",gfr:"\uD835\uDD24",gg:"\u226B",Gg:"\u22D9",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2AA5",gl:"\u2277",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gnE:"\u2269",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\uD835\uDD3E",gopf:"\uD835\uDD58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\uD835\uDCA2",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gt:">",GT:">",Gt:"\u226B",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",harrcir:"\u2948",harr:"\u2194",hArr:"\u21D4",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",hfr:"\uD835\uDD25",Hfr:"\u210C",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",hopf:"\uD835\uDD59",Hopf:"\u210D",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\uD835\uDCBD",Hscr:"\u210B",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",ifr:"\uD835\uDD26",Ifr:"\u2111",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",incare:"\u2105",in:"\u2208",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",intcal:"\u22BA",int:"\u222B",Int:"\u222C",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\uD835\uDD40",iopf:"\uD835\uDD5A",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",iscr:"\uD835\uDCBE",Iscr:"\u2110",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\uD835\uDD0D",jfr:"\uD835\uDD27",jmath:"\u0237",Jopf:"\uD835\uDD41",jopf:"\uD835\uDD5B",Jscr:"\uD835\uDCA5",jscr:"\uD835\uDCBF",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\uD835\uDD0E",kfr:"\uD835\uDD28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\uD835\uDD42",kopf:"\uD835\uDD5C",Kscr:"\uD835\uDCA6",kscr:"\uD835\uDCC0",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",lang:"\u27E8",Lang:"\u27EA",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",larrb:"\u21E4",larrbfs:"\u291F",larr:"\u2190",Larr:"\u219E",lArr:"\u21D0",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",latail:"\u2919",lAtail:"\u291B",lat:"\u2AAB",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lBarr:"\u290E",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27E8",LeftArrowBar:"\u21E4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21D0",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21C3",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTeeArrow:"\u21A4",LeftTee:"\u22A3",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangleBar:"\u29CF",LeftTriangle:"\u22B2",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21BF",LeftVectorBar:"\u2952",LeftVector:"\u21BC",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",lescc:"\u2AA8",les:"\u2A7D",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\uD835\uDD0F",lfr:"\uD835\uDD29",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21C7",ll:"\u226A",Ll:"\u22D8",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoustache:"\u23B0",lmoust:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lnE:"\u2268",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",longleftarrow:"\u27F5",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftrightarrow:"\u27F7",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longmapsto:"\u27FC",longrightarrow:"\u27F6",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\uD835\uDD43",lopf:"\uD835\uDD5D",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\uD835\uDCC1",Lscr:"\u2112",lsh:"\u21B0",Lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",lt:"<",LT:"<",Lt:"\u226A",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\uD835\uDD10",mfr:"\uD835\uDD2A",mho:"\u2127",micro:"\xB5",midast:"*",midcir:"\u2AF0",mid:"\u2223",middot:"\xB7",minusb:"\u229F",minus:"\u2212",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\uD835\uDD44",mopf:"\uD835\uDD5E",mp:"\u2213",mscr:"\uD835\uDCC2",Mscr:"\u2133",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266E",naturals:"\u2115",natur:"\u266E",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21D7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\uD835\uDD11",nfr:"\uD835\uDD2B",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nharr:"\u21AE",nhArr:"\u21CE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlarr:"\u219A",nlArr:"\u21CD",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219A",nLeftarrow:"\u21CD",nleftrightarrow:"\u21AE",nLeftrightarrow:"\u21CE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nopf:"\uD835\uDD5F",Nopf:"\u2115",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangle:"\u22EA",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangle:"\u22EB",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",nprec:"\u2280",npreceq:"\u2AAF\u0338",npre:"\u2AAF\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219B",nrArr:"\u21CF",nrarrw:"\u219D\u0338",nrightarrow:"\u219B",nRightarrow:"\u21CF",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\uD835\uDCA9",nscr:"\uD835\uDCC3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvDash:"\u22AD",nVdash:"\u22AE",nVDash:"\u22AF",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21D6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",Ocirc:"\xD4",ocirc:"\xF4",ocir:"\u229A",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\uD835\uDD12",ofr:"\uD835\uDD2C",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\uD835\uDD46",oopf:"\uD835\uDD60",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",orarr:"\u21BB",Or:"\u2A54",or:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\uD835\uDCAA",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",otimesas:"\u2A36",Otimes:"\u2A37",otimes:"\u2297",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",para:"\xB6",parallel:"\u2225",par:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\uD835\uDD13",pfr:"\uD835\uDD2D",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plus:"+",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",popf:"\uD835\uDD61",Popf:"\u2119",pound:"\xA3",prap:"\u2AB7",Pr:"\u2ABB",pr:"\u227A",prcue:"\u227C",precapprox:"\u2AB7",prec:"\u227A",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",pre:"\u2AAF",prE:"\u2AB3",precsim:"\u227E",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportional:"\u221D",Proportion:"\u2237",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\uD835\uDCAB",pscr:"\uD835\uDCC5",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\uD835\uDD14",qfr:"\uD835\uDD2E",qint:"\u2A0C",qopf:"\uD835\uDD62",Qopf:"\u211A",qprime:"\u2057",Qscr:"\uD835\uDCAC",qscr:"\uD835\uDCC6",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",quot:"\"",QUOT:"\"",rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",rang:"\u27E9",Rang:"\u27EB",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21A0",rArr:"\u21D2",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",ratail:"\u291A",rAtail:"\u291C",ratio:"\u2236",rationals:"\u211A",rbarr:"\u290D",rBarr:"\u290F",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",Re:"\u211C",rect:"\u25AD",reg:"\xAE",REG:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",rfr:"\uD835\uDD2F",Rfr:"\u211C",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrowBar:"\u21E5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21D2",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVectorBar:"\u2955",RightDownVector:"\u21C2",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTeeArrow:"\u21A6",RightTee:"\u22A2",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangleBar:"\u29D0",RightTriangle:"\u22B3",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVectorBar:"\u2954",RightUpVector:"\u21BE",RightVectorBar:"\u2953",RightVector:"\u21C0",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoustache:"\u23B1",rmoust:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",ropf:"\uD835\uDD63",Ropf:"\u211D",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",rscr:"\uD835\uDCC7",Rscr:"\u211B",rsh:"\u21B1",Rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2ABC",sc:"\u227B",sccue:"\u227D",sce:"\u2AB0",scE:"\u2AB4",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdotb:"\u22A1",sdot:"\u22C5",sdote:"\u2A66",searhk:"\u2925",searr:"\u2198",seArr:"\u21D8",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\uD835\uDD16",sfr:"\uD835\uDD30",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",solbar:"\u233F",solb:"\u29C4",sol:"/",Sopf:"\uD835\uDD4A",sopf:"\uD835\uDD64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25A1",Square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squ:"\u25A1",squf:"\u25AA",srarr:"\u2192",Sscr:"\uD835\uDCAE",sscr:"\uD835\uDCC8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",sub:"\u2282",Sub:"\u22D0",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subset:"\u2282",Subset:"\u22D0",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succapprox:"\u2AB8",succ:"\u227B",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",sum:"\u2211",Sum:"\u2211",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",sup:"\u2283",Sup:"\u22D1",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",supset:"\u2283",Supset:"\u22D1",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21D9",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"\t",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\uD835\uDD17",tfr:"\uD835\uDD31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",tilde:"\u02DC",Tilde:"\u223C",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2A31",timesb:"\u22A0",times:"\xD7",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",topbot:"\u2336",topcir:"\u2AF1",top:"\u22A4",Topf:"\uD835\uDD4B",topf:"\uD835\uDD65",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\uD835\uDCAF",tscr:"\uD835\uDCC9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",uarr:"\u2191",Uarr:"\u219F",uArr:"\u21D1",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\uD835\uDD18",ufr:"\uD835\uDD32",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\uD835\uDD4C",uopf:"\uD835\uDD66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21D1",UpArrowDownArrow:"\u21C5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21D5",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03C5",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTeeArrow:"\u21A5",UpTee:"\u22A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\uD835\uDCB0",uscr:"\uD835\uDCCA",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",varr:"\u2195",vArr:"\u21D5",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",vBar:"\u2AE8",Vbar:"\u2AEB",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22A2",vDash:"\u22A8",Vdash:"\u22A9",VDash:"\u22AB",Vdashl:"\u2AE6",veebar:"\u22BB",vee:"\u2228",Vee:"\u22C1",veeeq:"\u225A",vellip:"\u22EE",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\uD835\uDD19",vfr:"\uD835\uDD33",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\uD835\uDD4D",vopf:"\uD835\uDD67",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\uD835\uDCB1",vscr:"\uD835\uDCCB",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",wedge:"\u2227",Wedge:"\u22C0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\uD835\uDD1A",wfr:"\uD835\uDD34",Wopf:"\uD835\uDD4E",wopf:"\uD835\uDD68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\uD835\uDCB2",wscr:"\uD835\uDCCC",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\uD835\uDD1B",xfr:"\uD835\uDD35",xharr:"\u27F7",xhArr:"\u27FA",Xi:"\u039E",xi:"\u03BE",xlarr:"\u27F5",xlArr:"\u27F8",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\uD835\uDD4F",xopf:"\uD835\uDD69",xoplus:"\u2A01",xotime:"\u2A02",xrarr:"\u27F6",xrArr:"\u27F9",Xscr:"\uD835\uDCB3",xscr:"\uD835\uDCCD",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\uD835\uDD1C",yfr:"\uD835\uDD36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\uD835\uDD50",yopf:"\uD835\uDD6A",Yscr:"\uD835\uDCB4",yscr:"\uD835\uDCCE",YUcy:"\u042E",yucy:"\u044E",yuml:"\xFF",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",zfr:"\uD835\uDD37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\uD835\uDD6B",Zopf:"\u2124",Zscr:"\uD835\uDCB5",zscr:"\uD835\uDCCF",zwj:"\u200D",zwnj:"\u200C"}},{}],53:[function(require,module,exports){'use strict';////////////////////////////////////////////////////////////////////////////////
// Helpers
// Merge objects
//
function assign(obj/*from1, from2, from3, ...*/){var sources=Array.prototype.slice.call(arguments,1);sources.forEach(function(source){if(!source){return}Object.keys(source).forEach(function(key){obj[key]=source[key]})});return obj}function _class(obj){return Object.prototype.toString.call(obj)}function isString(obj){return"[object String]"===_class(obj)}function isObject(obj){return"[object Object]"===_class(obj)}function isRegExp(obj){return"[object RegExp]"===_class(obj)}function isFunction(obj){return"[object Function]"===_class(obj)}function escapeRE(str){return str.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}////////////////////////////////////////////////////////////////////////////////
var defaultOptions={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function isOptionsObj(obj){return Object.keys(obj||{}).reduce(function(acc,k){return acc||defaultOptions.hasOwnProperty(k)},!1)}var defaultSchemas={"http:":{validate:function(text,pos,self){var tail=text.slice(pos);if(!self.re.http){// compile lazily, because "host"-containing variables can change on tlds update.
self.re.http=new RegExp("^\\/\\/"+self.re.src_auth+self.re.src_host_port_strict+self.re.src_path,"i")}if(self.re.http.test(tail)){return tail.match(self.re.http)[0].length}return 0}},"https:":"http:","ftp:":"http:","//":{validate:function(text,pos,self){var tail=text.slice(pos);if(!self.re.no_http){// compile lazily, because "host"-containing variables can change on tlds update.
self.re.no_http=new RegExp("^"+self.re.src_auth+// Don't allow single-level domains, because of false positives like '//test'
// with code comments
"(?:localhost|(?:(?:"+self.re.src_domain+")\\.)+"+self.re.src_domain_root+")"+self.re.src_port+self.re.src_host_terminator+self.re.src_path,"i")}if(self.re.no_http.test(tail)){// should not be `://` & `///`, that protects from errors in protocol name
if(3<=pos&&":"===text[pos-3]){return 0}if(3<=pos&&"/"===text[pos-3]){return 0}return tail.match(self.re.no_http)[0].length}return 0}},"mailto:":{validate:function(text,pos,self){var tail=text.slice(pos);if(!self.re.mailto){self.re.mailto=new RegExp("^"+self.re.src_email_name+"@"+self.re.src_host_strict,"i")}if(self.re.mailto.test(tail)){return tail.match(self.re.mailto)[0].length}return 0}}},tlds_2ch_src_re="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",tlds_default="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");/*eslint-disable max-len*/ // RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
/*eslint-enable max-len*/ ////////////////////////////////////////////////////////////////////////////////
function resetScanCache(self){self.__index__=-1;self.__text_cache__=""}function createValidator(re){return function(text,pos){var tail=text.slice(pos);if(re.test(tail)){return tail.match(re)[0].length}return 0}}function createNormalizer(){return function(match,self){self.normalize(match)}}// Schemas compiler. Build regexps.
//
function compile(self){// Load & clone RE patterns.
var re=self.re=require("./lib/re")(self.__opts__),tlds=self.__tlds__.slice();// Define dynamic patterns
self.onCompile();if(!self.__tlds_replaced__){tlds.push(tlds_2ch_src_re)}tlds.push(re.src_xn);re.src_tlds=tlds.join("|");function untpl(tpl){return tpl.replace("%TLDS%",re.src_tlds)}re.email_fuzzy=RegExp(untpl(re.tpl_email_fuzzy),"i");re.link_fuzzy=RegExp(untpl(re.tpl_link_fuzzy),"i");re.link_no_ip_fuzzy=RegExp(untpl(re.tpl_link_no_ip_fuzzy),"i");re.host_fuzzy_test=RegExp(untpl(re.tpl_host_fuzzy_test),"i");//
// Compile each schema
//
var aliases=[];self.__compiled__={};// Reset compiled data
function schemaError(name,val){throw new Error("(LinkifyIt) Invalid schema \""+name+"\": "+val)}Object.keys(self.__schemas__).forEach(function(name){var val=self.__schemas__[name];// skip disabled methods
if(null===val){return}var compiled={validate:null,link:null};self.__compiled__[name]=compiled;if(isObject(val)){if(isRegExp(val.validate)){compiled.validate=createValidator(val.validate)}else if(isFunction(val.validate)){compiled.validate=val.validate}else{schemaError(name,val)}if(isFunction(val.normalize)){compiled.normalize=val.normalize}else if(!val.normalize){compiled.normalize=createNormalizer()}else{schemaError(name,val)}return}if(isString(val)){aliases.push(name);return}schemaError(name,val)});//
// Compile postponed aliases
//
aliases.forEach(function(alias){if(!self.__compiled__[self.__schemas__[alias]]){// Silently fail on missed schemas to avoid errons on disable.
// schemaError(alias, self.__schemas__[alias]);
return}self.__compiled__[alias].validate=self.__compiled__[self.__schemas__[alias]].validate;self.__compiled__[alias].normalize=self.__compiled__[self.__schemas__[alias]].normalize});//
// Fake record for guessed links
//
self.__compiled__[""]={validate:null,normalize:createNormalizer()};//
// Build schema condition
//
var slist=Object.keys(self.__compiled__).filter(function(name){// Filter disabled & fake schemas
return 0<name.length&&self.__compiled__[name]}).map(escapeRE).join("|");// (?!_) cause 1.5x slowdown
self.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+re.src_ZPCc+"))("+slist+")","i");self.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+re.src_ZPCc+"))("+slist+")","ig");self.re.pretest=RegExp("("+self.re.schema_test.source+")|("+self.re.host_fuzzy_test.source+")|@","i");//
// Cleanup
//
resetScanCache(self)}/**
         * class Match
         *
         * Match result. Single element of array, returned by [[LinkifyIt#match]]
         **/function Match(self,shift){var start=self.__index__,end=self.__last_index__,text=self.__text_cache__.slice(start,end);/**
                                                           * Match#schema -> String
                                                           *
                                                           * Prefix (protocol) for matched string.
                                                           **/this.schema=self.__schema__.toLowerCase();/**
                                                      * Match#index -> Number
                                                      *
                                                      * First position of matched string.
                                                      **/this.index=start+shift;/**
                                     * Match#lastIndex -> Number
                                     *
                                     * Next position after matched string.
                                     **/this.lastIndex=end+shift;/**
                                       * Match#raw -> String
                                       *
                                       * Matched string.
                                       **/this.raw=text;/**
                          * Match#text -> String
                          *
                          * Notmalized text of matched string.
                          **/this.text=text;/**
                           * Match#url -> String
                           *
                           * Normalized url of matched string.
                           **/this.url=text}function createMatch(self,shift){var match=new Match(self,shift);self.__compiled__[match.schema].normalize(match,self);return match}/**
         * class LinkifyIt
         **/ /**
              * new LinkifyIt(schemas, options)
              * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
              * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
              *
              * Creates new linkifier instance with optional additional schemas.
              * Can be called without `new` keyword for convenience.
              *
              * By default understands:
              *
              * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
              * - "fuzzy" links and emails (example.com, foo@bar.com).
              *
              * `schemas` is an object, where each key/value describes protocol/rule:
              *
              * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
              *   for example). `linkify-it` makes shure that prefix is not preceeded with
              *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
              * - __value__ - rule to check tail after link prefix
              *   - _String_ - just alias to existing rule
              *   - _Object_
              *     - _validate_ - validator function (should return matched length on success),
              *       or `RegExp`.
              *     - _normalize_ - optional function to normalize text & url of matched result
              *       (for example, for @twitter mentions).
              *
              * `options`:
              *
              * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
              * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
              *   like version numbers. Default `false`.
              * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
              *
              **/function LinkifyIt(schemas,options){if(!(this instanceof LinkifyIt)){return new LinkifyIt(schemas,options)}if(!options){if(isOptionsObj(schemas)){options=schemas;schemas={}}}this.__opts__=assign({},defaultOptions,options);// Cache last tested result. Used to skip repeating steps on next `match` call.
this.__index__=-1;this.__last_index__=-1;// Next scan position
this.__schema__="";this.__text_cache__="";this.__schemas__=assign({},defaultSchemas,schemas);this.__compiled__={};this.__tlds__=tlds_default;this.__tlds_replaced__=!1;this.re={};compile(this)}/** chainable
         * LinkifyIt#add(schema, definition)
         * - schema (String): rule name (fixed pattern prefix)
         * - definition (String|RegExp|Object): schema definition
         *
         * Add new rule definition. See constructor description for details.
         **/LinkifyIt.prototype.add=function add(schema,definition){this.__schemas__[schema]=definition;compile(this);return this};/** chainable
          * LinkifyIt#set(options)
          * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
          *
          * Set recognition options for links without schema.
          **/LinkifyIt.prototype.set=function set(options){this.__opts__=assign(this.__opts__,options);return this};/**
          * LinkifyIt#test(text) -> Boolean
          *
          * Searches linkifiable pattern and returns `true` on success or `false` on fail.
          **/LinkifyIt.prototype.test=function test(text){// Reset scan cache
this.__text_cache__=text;this.__index__=-1;if(!text.length){return!1}var m,ml,me,len,shift,next,re,tld_pos,at_pos;// try to scan for link with schema - that's the most simple rule
if(this.re.schema_test.test(text)){re=this.re.schema_search;re.lastIndex=0;while(null!==(m=re.exec(text))){len=this.testSchemaAt(text,m[2],re.lastIndex);if(len){this.__schema__=m[2];this.__index__=m.index+m[1].length;this.__last_index__=m.index+m[0].length+len;break}}}if(this.__opts__.fuzzyLink&&this.__compiled__["http:"]){// guess schemaless links
tld_pos=text.search(this.re.host_fuzzy_test);if(0<=tld_pos){// if tld is located after found link - no need to check fuzzy pattern
if(0>this.__index__||tld_pos<this.__index__){if(null!==(ml=text.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))){shift=ml.index+ml[1].length;if(0>this.__index__||shift<this.__index__){this.__schema__="";this.__index__=shift;this.__last_index__=ml.index+ml[0].length}}}}}if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]){// guess schemaless emails
at_pos=text.indexOf("@");if(0<=at_pos){// We can't skip this check, because this cases are possible:
// 192.168.1.1@gmail.com, my.in@example.com
if(null!==(me=text.match(this.re.email_fuzzy))){shift=me.index+me[1].length;next=me.index+me[0].length;if(0>this.__index__||shift<this.__index__||shift===this.__index__&&next>this.__last_index__){this.__schema__="mailto:";this.__index__=shift;this.__last_index__=next}}}}return 0<=this.__index__};/**
          * LinkifyIt#pretest(text) -> Boolean
          *
          * Very quick check, that can give false positives. Returns true if link MAY BE
          * can exists. Can be used for speed optimization, when you need to check that
          * link NOT exists.
          **/LinkifyIt.prototype.pretest=function pretest(text){return this.re.pretest.test(text)};/**
          * LinkifyIt#testSchemaAt(text, name, position) -> Number
          * - text (String): text to scan
          * - name (String): rule (schema) name
          * - position (Number): text offset to check from
          *
          * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
          * at given position. Returns length of found pattern (0 on fail).
          **/LinkifyIt.prototype.testSchemaAt=function testSchemaAt(text,schema,pos){// If not supported schema check requested - terminate
if(!this.__compiled__[schema.toLowerCase()]){return 0}return this.__compiled__[schema.toLowerCase()].validate(text,pos,this)};/**
          * LinkifyIt#match(text) -> Array|null
          *
          * Returns array of found link descriptions or `null` on fail. We strongly
          * recommend to use [[LinkifyIt#test]] first, for best speed.
          *
          * ##### Result match description
          *
          * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
          *   protocol-neutral  links.
          * - __index__ - offset of matched text
          * - __lastIndex__ - index of next char after mathch end
          * - __raw__ - matched text
          * - __text__ - normalized text
          * - __url__ - link, generated from matched text
          **/LinkifyIt.prototype.match=function match(text){var shift=0,result=[];// Try to take previous element from cache, if .test() called before
if(0<=this.__index__&&this.__text_cache__===text){result.push(createMatch(this,shift));shift=this.__last_index__}// Cut head if cache was used
var tail=shift?text.slice(shift):text;// Scan string until end reached
while(this.test(tail)){result.push(createMatch(this,shift));tail=tail.slice(this.__last_index__);shift+=this.__last_index__}if(result.length){return result}return null};/** chainable
          * LinkifyIt#tlds(list [, keepOld]) -> this
          * - list (Array): list of tlds
          * - keepOld (Boolean): merge with current list if `true` (`false` by default)
          *
          * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
          * to avoid false positives. By default this algorythm used:
          *
          * - hostname with any 2-letter root zones are ok.
          * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
          *   are ok.
          * - encoded (`xn--...`) root zones are ok.
          *
          * If list is replaced, then exact match for 2-chars root zones will be checked.
          **/LinkifyIt.prototype.tlds=function tlds(list,keepOld){list=Array.isArray(list)?list:[list];if(!keepOld){this.__tlds__=list.slice();this.__tlds_replaced__=!0;compile(this);return this}this.__tlds__=this.__tlds__.concat(list).sort().filter(function(el,idx,arr){return el!==arr[idx-1]}).reverse();compile(this);return this};/**
          * LinkifyIt#normalize(match)
          *
          * Default normalizer (if schema does not define it's own).
          **/LinkifyIt.prototype.normalize=function normalize(match){// Do minimal possible changes by default. Need to collect feedback prior
// to move forward https://github.com/markdown-it/linkify-it/issues/1
if(!match.schema){match.url="http://"+match.url}if("mailto:"===match.schema&&!/^mailto:/i.test(match.url)){match.url="mailto:"+match.url}};/**
          * LinkifyIt#onCompile()
          *
          * Override to modify basic RegExp-s.
          **/LinkifyIt.prototype.onCompile=function onCompile(){};module.exports=LinkifyIt},{"./lib/re":54}],54:[function(require,module,exports){'use strict';module.exports=function(opts){var re={src_Any:require("uc.micro/properties/Any/regex").source,src_Cc:require("uc.micro/categories/Cc/regex").source,src_Z:require("uc.micro/categories/Z/regex").source,src_P:require("uc.micro/categories/P/regex").source};// Use direct extract instead of `regenerate` to reduse browserified size
// \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
re.src_ZPCc=[re.src_Z,re.src_P,re.src_Cc].join("|");// \p{\Z\Cc} (white spaces + control)
re.src_ZCc=[re.src_Z,re.src_Cc].join("|");// Experimental. List of chars, completely prohibited in links
// because can separate it from other part of text
var text_separators="[><\uFF5C]";// All possible word characters (everything without punctuation, spaces & controls)
// Defined via punctuation & spaces to save space
// Should be something like \p{\L\N\S\M} (\w but without `_`)
re.src_pseudo_letter="(?:(?!"+text_separators+"|"+re.src_ZPCc+")"+re.src_Any+")";// The same as abothe but without [0-9]
// var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
////////////////////////////////////////////////////////////////////////////////
re.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";// Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
re.src_auth="(?:(?:(?!"+re.src_ZCc+"|[@/\\[\\]()]).)+@)?";re.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";re.src_host_terminator="(?=$|"+text_separators+"|"+re.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+re.src_ZPCc+"))";re.src_path="(?:"+"[/?#]"+"(?:"+"(?!"+re.src_ZCc+"|"+text_separators+"|[()[\\]{}.,\"'?!\\-]).|"+"\\[(?:(?!"+re.src_ZCc+"|\\]).)*\\]|"+"\\((?:(?!"+re.src_ZCc+"|[)]).)*\\)|"+"\\{(?:(?!"+re.src_ZCc+"|[}]).)*\\}|"+"\\\"(?:(?!"+re.src_ZCc+"|[\"]).)+\\\"|"+"\\'(?:(?!"+re.src_ZCc+"|[']).)+\\'|"+"\\'(?="+re.src_pseudo_letter+"|[-]).|"+// allow `I'm_king` if no pair found
"\\.{2,4}[a-zA-Z0-9%/]|"+// github has ... in commit range links,
// google has .... in links (issue #66)
// Restrict to
// - english
// - percent-encoded
// - parts of file path
// until more examples found.
"\\.(?!"+re.src_ZCc+"|[.]).|"+(opts&&opts["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|"// `---` => long dash, terminate
:"\\-+|")+"\\,(?!"+re.src_ZCc+").|"+// allow `,,,` in paths
"\\!(?!"+re.src_ZCc+"|[!]).|"+"\\?(?!"+re.src_ZCc+"|[?])."+")+"+"|\\/"+")?";// Allow anything in markdown spec, forbid quote (") at the first position
// because emails enclosed in quotes are far more common
re.src_email_name="[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\\"\\.a-zA-Z0-9_]*";re.src_xn="xn--[a-z0-9\\-]{1,59}";// More to read about domain names
// http://serverfault.com/questions/638260/
re.src_domain_root=// Allow letters & digits (http://test1)
"(?:"+re.src_xn+"|"+re.src_pseudo_letter+"{1,63}"+")";re.src_domain="(?:"+re.src_xn+"|"+"(?:"+re.src_pseudo_letter+")"+"|"+"(?:"+re.src_pseudo_letter+"(?:-|"+re.src_pseudo_letter+"){0,61}"+re.src_pseudo_letter+")"+")";re.src_host="(?:"+// Don't need IP check, because digits are already allowed in normal domain names
//   src_ip4 +
// '|' +
"(?:(?:(?:"+re.src_domain+")\\.)*"+re.src_domain/*_root*/+")"+")";re.tpl_host_fuzzy="(?:"+re.src_ip4+"|"+"(?:(?:(?:"+re.src_domain+")\\.)+(?:%TLDS%))"+")";re.tpl_host_no_ip_fuzzy="(?:(?:(?:"+re.src_domain+")\\.)+(?:%TLDS%))";re.src_host_strict=re.src_host+re.src_host_terminator;re.tpl_host_fuzzy_strict=re.tpl_host_fuzzy+re.src_host_terminator;re.src_host_port_strict=re.src_host+re.src_port+re.src_host_terminator;re.tpl_host_port_fuzzy_strict=re.tpl_host_fuzzy+re.src_port+re.src_host_terminator;re.tpl_host_port_no_ip_fuzzy_strict=re.tpl_host_no_ip_fuzzy+re.src_port+re.src_host_terminator;////////////////////////////////////////////////////////////////////////////////
// Main rules
// Rude test fuzzy links by host, for quick deny
re.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+re.src_ZPCc+"|>|$))";re.tpl_email_fuzzy="(^|"+text_separators+"|\"|\\(|"+re.src_ZCc+")"+"("+re.src_email_name+"@"+re.tpl_host_fuzzy_strict+")";re.tpl_link_fuzzy=// Fuzzy link can't be prepended with .:/\- and non punctuation.
// but can start with > (markdown blockquote)
"(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+re.src_ZPCc+"))"+"((?![$+<=>^`|\uFF5C])"+re.tpl_host_port_fuzzy_strict+re.src_path+")";re.tpl_link_no_ip_fuzzy=// Fuzzy link can't be prepended with .:/\- and non punctuation.
// but can start with > (markdown blockquote)
"(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+re.src_ZPCc+"))"+"((?![$+<=>^`|\uFF5C])"+re.tpl_host_port_no_ip_fuzzy_strict+re.src_path+")";return re}},{"uc.micro/categories/Cc/regex":61,"uc.micro/categories/P/regex":63,"uc.micro/categories/Z/regex":64,"uc.micro/properties/Any/regex":66}],55:[function(require,module,exports){'use strict';/* eslint-disable no-bitwise */var decodeCache={};function getDecodeCache(exclude){var i,ch,cache=decodeCache[exclude];if(cache){return cache}cache=decodeCache[exclude]=[];for(i=0;128>i;i++){ch=String.fromCharCode(i);cache.push(ch)}for(i=0;i<exclude.length;i++){ch=exclude.charCodeAt(i);cache[ch]="%"+("0"+ch.toString(16).toUpperCase()).slice(-2)}return cache}// Decode percent-encoded string.
//
function decode(string,exclude){var cache;if("string"!==typeof exclude){exclude=decode.defaultChars}cache=getDecodeCache(exclude);return string.replace(/(%[a-f0-9]{2})+/gi,function(seq){var i,l,b1,b2,b3,b4,chr,result="";for(i=0,l=seq.length;i<l;i+=3){b1=parseInt(seq.slice(i+1,i+3),16);if(128>b1){result+=cache[b1];continue}if(192===(224&b1)&&i+3<l){// 110xxxxx 10xxxxxx
b2=parseInt(seq.slice(i+4,i+6),16);if(128===(192&b2)){chr=1984&b1<<6|63&b2;if(128>chr){result+="\uFFFD\uFFFD"}else{result+=String.fromCharCode(chr)}i+=3;continue}}if(224===(240&b1)&&i+6<l){// 1110xxxx 10xxxxxx 10xxxxxx
b2=parseInt(seq.slice(i+4,i+6),16);b3=parseInt(seq.slice(i+7,i+9),16);if(128===(192&b2)&&128===(192&b3)){chr=61440&b1<<12|4032&b2<<6|63&b3;if(2048>chr||55296<=chr&&57343>=chr){result+="\uFFFD\uFFFD\uFFFD"}else{result+=String.fromCharCode(chr)}i+=6;continue}}if(240===(248&b1)&&i+9<l){// 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
b2=parseInt(seq.slice(i+4,i+6),16);b3=parseInt(seq.slice(i+7,i+9),16);b4=parseInt(seq.slice(i+10,i+12),16);if(128===(192&b2)&&128===(192&b3)&&128===(192&b4)){chr=1835008&b1<<18|258048&b2<<12|4032&b3<<6|63&b4;if(65536>chr||1114111<chr){result+="\uFFFD\uFFFD\uFFFD\uFFFD"}else{chr-=65536;result+=String.fromCharCode(55296+(chr>>10),56320+(1023&chr))}i+=9;continue}}result+="\uFFFD"}return result})}decode.defaultChars=";/?:@&=+$,#";decode.componentChars="";module.exports=decode},{}],56:[function(require,module,exports){'use strict';var encodeCache={};// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude){var i,ch,cache=encodeCache[exclude];if(cache){return cache}cache=encodeCache[exclude]=[];for(i=0;128>i;i++){ch=String.fromCharCode(i);if(/^[0-9a-z]$/i.test(ch)){// always allow unencoded alphanumeric characters
cache.push(ch)}else{cache.push("%"+("0"+i.toString(16).toUpperCase()).slice(-2))}}for(i=0;i<exclude.length;i++){cache[exclude.charCodeAt(i)]=exclude[i]}return cache}// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string,exclude,keepEscaped){var i,l,code,nextCode,cache,result="";if("string"!==typeof exclude){// encode(string, keepEscaped)
keepEscaped=exclude;exclude=encode.defaultChars}if("undefined"===typeof keepEscaped){keepEscaped=!0}cache=getEncodeCache(exclude);for(i=0,l=string.length;i<l;i++){code=string.charCodeAt(i);if(keepEscaped&&37===code/* % */&&i+2<l){if(/^[0-9a-f]{2}$/i.test(string.slice(i+1,i+3))){result+=string.slice(i,i+3);i+=2;continue}}if(128>code){result+=cache[code];continue}if(55296<=code&&57343>=code){if(55296<=code&&56319>=code&&i+1<l){nextCode=string.charCodeAt(i+1);if(56320<=nextCode&&57343>=nextCode){result+=encodeURIComponent(string[i]+string[i+1]);i++;continue}}result+="%EF%BF%BD";continue}result+=encodeURIComponent(string[i])}return result}encode.defaultChars=";/?:@&=+$,-_.!~*'()#";encode.componentChars="-_.!~*'()";module.exports=encode},{}],57:[function(require,module,exports){'use strict';module.exports=function format(url){var result="";result+=url.protocol||"";result+=url.slashes?"//":"";result+=url.auth?url.auth+"@":"";if(url.hostname&&-1!==url.hostname.indexOf(":")){// ipv6 address
result+="["+url.hostname+"]"}else{result+=url.hostname||""}result+=url.port?":"+url.port:"";result+=url.pathname||"";result+=url.search||"";result+=url.hash||"";return result}},{}],58:[function(require,module,exports){'use strict';module.exports.encode=require("./encode");module.exports.decode=require("./decode");module.exports.format=require("./format");module.exports.parse=require("./parse")},{"./decode":55,"./encode":56,"./format":57,"./parse":59}],59:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//
function Url(){this.protocol=null;this.slashes=null;this.auth=null;this.port=null;this.hostname=null;this.hash=null;this.search=null;this.pathname=null}// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,// Special case for a simple path URL
simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims=["<",">","\"","`"," ","\r","\n","\t"],// RFC 2396: characters not allowed for various reasons.
unwise=["{","}","|","\\","^","`"].concat(delims),// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape=["'"].concat(unwise),// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnameMaxLen=255,hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,// protocols that can allow "unsafe" and "unwise" chars.
/* eslint-disable no-script-url */ // protocols that never have a hostname.
hostlessProtocol={javascript:!0,"javascript:":!0},// protocols that always contain a // bit.
slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};/* eslint-enable no-script-url */function urlParse(url,slashesDenoteHost){if(url&&url instanceof Url){return url}var u=new Url;u.parse(url,slashesDenoteHost);return u}Url.prototype.parse=function(url,slashesDenoteHost){var i,l,lowerProto,hec,slashes,rest=url;// trim before proceeding.
// This is to support parse stuff like "  http://foo.com  \n"
rest=rest.trim();if(!slashesDenoteHost&&1===url.split("#").length){// Try fast path regexp
var simplePath=simplePathPattern.exec(rest);if(simplePath){this.pathname=simplePath[1];if(simplePath[2]){this.search=simplePath[2]}return this}}var proto=protocolPattern.exec(rest);if(proto){proto=proto[0];lowerProto=proto.toLowerCase();this.protocol=proto;rest=rest.substr(proto.length)}// figure out if it's got a host
// user@server is *always* interpreted as a hostname, and url
// resolution will treat //foo/bar as host=foo,path=bar because that's
// how the browser resolves relative URLs.
if(slashesDenoteHost||proto||rest.match(/^\/\/[^@\/]+@[^@\/]+/)){slashes="//"===rest.substr(0,2);if(slashes&&!(proto&&hostlessProtocol[proto])){rest=rest.substr(2);this.slashes=!0}}if(!hostlessProtocol[proto]&&(slashes||proto&&!slashedProtocol[proto])){// there's a hostname.
// the first instance of /, ?, ;, or # ends the host.
//
// If there is an @ in the hostname, then non-host chars *are* allowed
// to the left of the last @ sign, unless some host-ending character
// comes *before* the @-sign.
// URLs are obnoxious.
//
// ex:
// http://a@b@c/ => user:a@b host:c
// http://a@b?@c => user:a host:c path:/?@c
// v0.12 TODO(isaacs): This is not quite how Chrome does things.
// Review our test case against browsers more comprehensively.
// find the first instance of any hostEndingChars
var hostEnd=-1;for(i=0;i<hostEndingChars.length;i++){hec=rest.indexOf(hostEndingChars[i]);if(-1!==hec&&(-1===hostEnd||hec<hostEnd)){hostEnd=hec}}// at this point, either we have an explicit point where the
// auth portion cannot go past, or the last @ char is the decider.
var auth,atSign;if(-1===hostEnd){// atSign can be anywhere.
atSign=rest.lastIndexOf("@")}else{// atSign must be in auth portion.
// http://a@b/c@d => host:b auth:a path:/c@d
atSign=rest.lastIndexOf("@",hostEnd)}// Now we have a portion which is definitely the auth.
// Pull that off.
if(-1!==atSign){auth=rest.slice(0,atSign);rest=rest.slice(atSign+1);this.auth=auth}// the host is the remaining to the left of the first non-host char
hostEnd=-1;for(i=0;i<nonHostChars.length;i++){hec=rest.indexOf(nonHostChars[i]);if(-1!==hec&&(-1===hostEnd||hec<hostEnd)){hostEnd=hec}}// if we still have not hit it, then the entire thing is a host.
if(-1===hostEnd){hostEnd=rest.length}if(":"===rest[hostEnd-1]){hostEnd--}var host=rest.slice(0,hostEnd);rest=rest.slice(hostEnd);// pull out port.
this.parseHost(host);// we've indicated that there is a hostname,
// so even if it's empty, it has to be present.
this.hostname=this.hostname||"";// if hostname begins with [ and ends with ]
// assume that it's an IPv6 address.
var ipv6Hostname="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];// validate a little.
if(!ipv6Hostname){var hostparts=this.hostname.split(/\./);for(i=0,l=hostparts.length;i<l;i++){var part=hostparts[i];if(!part){continue}if(!part.match(hostnamePartPattern)){for(var newpart="",j=0,k=part.length;j<k;j++){if(127<part.charCodeAt(j)){// we replace non-ASCII char with a temporary placeholder
// we need this to make sure size of hostname is not
// broken by replacing non-ASCII by nothing
newpart+="x"}else{newpart+=part[j]}}// we test again with ASCII char only
if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i),notHost=hostparts.slice(i+1),bit=part.match(hostnamePartStart);if(bit){validParts.push(bit[1]);notHost.unshift(bit[2])}if(notHost.length){rest=notHost.join(".")+rest}this.hostname=validParts.join(".");break}}}}if(this.hostname.length>hostnameMaxLen){this.hostname=""}// strip [ and ] from the hostname
// the host field still retains them, though
if(ipv6Hostname){this.hostname=this.hostname.substr(1,this.hostname.length-2)}}// chop off from the tail first.
var hash=rest.indexOf("#");if(-1!==hash){// got a fragment string.
this.hash=rest.substr(hash);rest=rest.slice(0,hash)}var qm=rest.indexOf("?");if(-1!==qm){this.search=rest.substr(qm);rest=rest.slice(0,qm)}if(rest){this.pathname=rest}if(slashedProtocol[lowerProto]&&this.hostname&&!this.pathname){this.pathname=""}return this};Url.prototype.parseHost=function(host){var port=portPattern.exec(host);if(port){port=port[0];if(":"!==port){this.port=port.substr(1)}host=host.substr(0,host.length-port.length)}if(host){this.hostname=host}};module.exports=urlParse},{}],60:[function(require,module,exports){(function(global){/*! https://mths.be/punycode v1.4.1 by @mathias */;(function(root){/** Detect free variables */var freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule="object"==typeof module&&module&&!module.nodeType&&module,freeGlobal="object"==typeof global&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal||freeGlobal.self===freeGlobal){root=freeGlobal}/**
             * The `punycode` object.
             * @name punycode
             * @type Object
             */var punycode,/** Highest positive signed 32-bit float value */maxInt=2147483647,// aka. 0x7FFFFFFF or 2^31-1
/** Bootstring parameters */base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128,// 0x80
delimiter="-",// '\x2D'
/** Regular expressions */regexPunycode=/^xn--/,regexNonASCII=/[^\x20-\x7E]/,// unprintable ASCII chars + non-ASCII chars
regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g,// RFC 3490 separators
/** Error messages */errors={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},/** Convenience shortcuts */baseMinusTMin=base-tMin,floor=Math.floor,stringFromCharCode=String.fromCharCode,/** Temporary variable */key;/*--------------------------------------------------------------------------*/ /**
                                                                                                                            * A generic error utility function.
                                                                                                                            * @private
                                                                                                                            * @param {String} type The error type.
                                                                                                                            * @returns {Error} Throws a `RangeError` with the applicable error message.
                                                                                                                            */function error(type){throw new RangeError(errors[type])}/**
             * A generic `Array#map` utility function.
             * @private
             * @param {Array} array The array to iterate over.
             * @param {Function} callback The function that gets called for every array
             * item.
             * @returns {Array} A new array of values returned by the callback function.
             */function map(array,fn){var length=array.length,result=[];while(length--){result[length]=fn(array[length])}return result}/**
             * A simple `Array#map`-like wrapper to work with domain name strings or email
             * addresses.
             * @private
             * @param {String} domain The domain name or email address.
             * @param {Function} callback The function that gets called for every
             * character.
             * @returns {Array} A new string of characters returned by the callback
             * function.
             */function mapDomain(string,fn){var parts=string.split("@"),result="";if(1<parts.length){// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
result=parts[0]+"@";string=parts[1]}// Avoid `split(regex)` for IE8 compatibility. See #17.
string=string.replace(regexSeparators,".");var labels=string.split("."),encoded=map(labels,fn).join(".");return result+encoded}/**
             * Creates an array containing the numeric code points of each Unicode
             * character in the string. While JavaScript uses UCS-2 internally,
             * this function will convert a pair of surrogate halves (each of which
             * UCS-2 exposes as separate characters) into a single code point,
             * matching UTF-16.
             * @see `punycode.ucs2.encode`
             * @see <https://mathiasbynens.be/notes/javascript-encoding>
             * @memberOf punycode.ucs2
             * @name decode
             * @param {String} string The Unicode input string (UCS-2).
             * @returns {Array} The new array of code points.
             */function ucs2decode(string){var output=[],counter=0,length=string.length,value,extra;while(counter<length){value=string.charCodeAt(counter++);if(55296<=value&&56319>=value&&counter<length){// high surrogate, and there is a next character
extra=string.charCodeAt(counter++);if(56320==(64512&extra)){// low surrogate
output.push(((1023&value)<<10)+(1023&extra)+65536)}else{// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
output.push(value);counter--}}else{output.push(value)}}return output}/**
             * Creates a string based on an array of numeric code points.
             * @see `punycode.ucs2.decode`
             * @memberOf punycode.ucs2
             * @name encode
             * @param {Array} codePoints The array of numeric code points.
             * @returns {String} The new Unicode string (UCS-2).
             */function ucs2encode(array){return map(array,function(value){var output="";if(65535<value){value-=65536;output+=stringFromCharCode(55296|1023&value>>>10);value=56320|1023&value}output+=stringFromCharCode(value);return output}).join("")}/**
             * Converts a basic code point into a digit/integer.
             * @see `digitToBasic()`
             * @private
             * @param {Number} codePoint The basic numeric code point value.
             * @returns {Number} The numeric value of a basic code point (for use in
             * representing integers) in the range `0` to `base - 1`, or `base` if
             * the code point does not represent a value.
             */function basicToDigit(codePoint){if(10>codePoint-48){return codePoint-22}if(26>codePoint-65){return codePoint-65}if(26>codePoint-97){return codePoint-97}return base}/**
             * Converts a digit/integer into a basic code point.
             * @see `basicToDigit()`
             * @private
             * @param {Number} digit The numeric value of a basic code point.
             * @returns {Number} The basic code point whose value (when used for
             * representing integers) is `digit`, which needs to be in the range
             * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
             * used; else, the lowercase form is used. The behavior is undefined
             * if `flag` is non-zero and `digit` has no uppercase form.
             */function digitToBasic(digit,flag){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return digit+22+75*(26>digit)-((0!=flag)<<5)}/**
             * Bias adaptation function as per section 3.4 of RFC 3492.
             * https://tools.ietf.org/html/rfc3492#section-3.4
             * @private
             */function adapt(delta,numPoints,firstTime){var k=0;delta=firstTime?floor(delta/damp):delta>>1;delta+=floor(delta/numPoints);for(;/* no initialization */delta>baseMinusTMin*tMax>>1;k+=base){delta=floor(delta/baseMinusTMin)}return floor(k+(baseMinusTMin+1)*delta/(delta+skew))}/**
             * Converts a Punycode string of ASCII-only symbols to a string of Unicode
             * symbols.
             * @memberOf punycode
             * @param {String} input The Punycode string of ASCII-only symbols.
             * @returns {String} The resulting string of Unicode symbols.
             */function decode(input){// Don't use UCS-2
var output=[],inputLength=input.length,out,i=0,n=initialN,bias=initialBias,basic,j,index,oldi,w,k,digit,t,/** Cached calculation results */baseMinusT;// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
basic=input.lastIndexOf(delimiter);if(0>basic){basic=0}for(j=0;j<basic;++j){// if it's not a basic code point
if(128<=input.charCodeAt(j)){error("not-basic")}output.push(input.charCodeAt(j))}// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(index=0<basic?basic+1:0;index<inputLength;)/* no final expression */{// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(oldi=i,w=1,k=base;;/* no condition */k+=base){if(index>=inputLength){error("invalid-input")}digit=basicToDigit(input.charCodeAt(index++));if(digit>=base||digit>floor((maxInt-i)/w)){error("overflow")}i+=digit*w;t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(digit<t){break}baseMinusT=base-t;if(w>floor(maxInt/baseMinusT)){error("overflow")}w*=baseMinusT}out=output.length+1;bias=adapt(i-oldi,out,0==oldi);// `i` was supposed to wrap around from `out` to `0`,
// incrementing `n` each time, so we'll fix that now:
if(floor(i/out)>maxInt-n){error("overflow")}n+=floor(i/out);i%=out;// Insert `n` at position `i` of the output
output.splice(i++,0,n)}return ucs2encode(output)}/**
             * Converts a string of Unicode symbols (e.g. a domain name label) to a
             * Punycode string of ASCII-only symbols.
             * @memberOf punycode
             * @param {String} input The string of Unicode symbols.
             * @returns {String} The resulting Punycode string of ASCII-only symbols.
             */function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,output=[],/** `inputLength` will hold the number of code points in `input`. */inputLength,/** Cached calculation results */handledCPCountPlusOne,baseMinusT,qMinusT;// Convert the input in UCS-2 to Unicode
input=ucs2decode(input);// Cache the length
inputLength=input.length;// Initialize the state
n=initialN;delta=0;bias=initialBias;// Handle the basic code points
for(j=0;j<inputLength;++j){currentValue=input[j];if(128>currentValue){output.push(stringFromCharCode(currentValue))}}handledCPCount=basicLength=output.length;// `handledCPCount` is the number of code points that have been handled;
// `basicLength` is the number of basic code points.
// Finish the basic string - if it is not empty - with a delimiter
if(basicLength){output.push(delimiter)}// Main encoding loop:
while(handledCPCount<inputLength){// All non-basic code points < n have been handled already. Find the next
// larger one:
for(m=maxInt,j=0;j<inputLength;++j){currentValue=input[j];if(currentValue>=n&&currentValue<m){m=currentValue}}// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
handledCPCountPlusOne=handledCPCount+1;if(m-n>floor((maxInt-delta)/handledCPCountPlusOne)){error("overflow")}delta+=(m-n)*handledCPCountPlusOne;n=m;for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<n&&++delta>maxInt){error("overflow")}if(currentValue==n){// Represent delta as a generalized variable-length integer
for(q=delta,k=base;;/* no condition */k+=base){t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(q<t){break}qMinusT=q-t;baseMinusT=base-t;output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0)));q=floor(qMinusT/baseMinusT)}output.push(stringFromCharCode(digitToBasic(q,0)));bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength);delta=0;++handledCPCount}}++delta;++n}return output.join("")}/**
             * Converts a Punycode string representing a domain name or an email address
             * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
             * it doesn't matter if you call it on a string that has already been
             * converted to Unicode.
             * @memberOf punycode
             * @param {String} input The Punycoded domain name or email address to
             * convert to Unicode.
             * @returns {String} The Unicode representation of the given Punycode
             * string.
             */function toUnicode(input){return mapDomain(input,function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string})}/**
             * Converts a Unicode string representing a domain name or an email address to
             * Punycode. Only the non-ASCII parts of the domain name will be converted,
             * i.e. it doesn't matter if you call it with a domain that's already in
             * ASCII.
             * @memberOf punycode
             * @param {String} input The domain name or email address to convert, as a
             * Unicode string.
             * @returns {String} The Punycode representation of the given domain name or
             * email address.
             */function toASCII(input){return mapDomain(input,function(string){return regexNonASCII.test(string)?"xn--"+encode(string):string})}/*--------------------------------------------------------------------------*/ /** Define the public API */punycode={/**
             * A string representing the current Punycode.js version number.
             * @memberOf punycode
             * @type String
             */version:"1.4.1",/**
             * An object of methods to convert from JavaScript's internal character
             * representation (UCS-2) to Unicode code points, and back.
             * @see <https://mathiasbynens.be/notes/javascript-encoding>
             * @memberOf punycode
             * @type Object
             */ucs2:{decode:ucs2decode,encode:ucs2encode},decode:decode,encode:encode,toASCII:toASCII,toUnicode:toUnicode};/** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if("function"==typeof define&&"object"==typeof define.amd&&define.amd){define("punycode",function(){return punycode})}else if(freeExports&&freeModule){if(module.exports==freeExports){// in Node.js, io.js, or RingoJS v0.8.0+
freeModule.exports=punycode}else{// in Narwhal or RingoJS v0.7.0-
for(key in punycode){punycode.hasOwnProperty(key)&&(freeExports[key]=punycode[key])}}}else{// in Rhino or a web browser
root.punycode=punycode}})(this)}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{}],61:[function(require,module,exports){module.exports=/[\0-\x1F\x7F-\x9F]/},{}],62:[function(require,module,exports){module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},{}],63:[function(require,module,exports){module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},{}],64:[function(require,module,exports){module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},{}],65:[function(require,module,exports){'use strict';exports.Any=require("./properties/Any/regex");exports.Cc=require("./categories/Cc/regex");exports.Cf=require("./categories/Cf/regex");exports.P=require("./categories/P/regex");exports.Z=require("./categories/Z/regex")},{"./categories/Cc/regex":61,"./categories/Cf/regex":62,"./categories/P/regex":63,"./categories/Z/regex":64,"./properties/Any/regex":66}],66:[function(require,module,exports){module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},{}],67:[function(require,module,exports){'use strict';module.exports=require("./lib/")},{"./lib/":9}]},{},[67])(67)});/* **********************************************
         Begin prism-core.js
    ********************************************** */var _self="undefined"!==typeof window?window// if in browser
:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self// if in worker
:{}// if in node js
,Prism$1=function(_self){// Private helper vars
var lang=/\blang(?:uage)?-([\w-]+)\b/i,uniqueId=0,_={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(tokens){if(tokens instanceof Token){return new Token(tokens.type,_.util.encode(tokens.content),tokens.alias)}else if(Array.isArray(tokens)){return tokens.map(_.util.encode)}else{return tokens.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")}},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(obj){if(!obj.__id){Object.defineProperty(obj,"__id",{value:++uniqueId})}return obj.__id},// Deep clone a language definition (e.g. to extend it)
clone:function deepClone(o,visited){var clone,id,type=_.util.type(o);visited=visited||{};switch(type){case"Object":id=_.util.objId(o);if(visited[id]){return visited[id]}clone={};visited[id]=clone;for(var key in o){if(o.hasOwnProperty(key)){clone[key]=deepClone(o[key],visited)}}return clone;case"Array":id=_.util.objId(o);if(visited[id]){return visited[id]}clone=[];visited[id]=clone;o.forEach(function(v,i){clone[i]=deepClone(v,visited)});return clone;default:return o;}}},languages:{extend:function(id,redef){var lang=_.util.clone(_.languages[id]);for(var key in redef){lang[key]=redef[key]}return lang},/**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need an object and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */insertBefore:function(inside,before,insert,root){root=root||_.languages;var grammar=root[inside],ret={};for(var token in grammar){if(grammar.hasOwnProperty(token)){if(token==before){for(var newToken in insert){if(insert.hasOwnProperty(newToken)){ret[newToken]=insert[newToken]}}}// Do not insert token which also occur in insert. See #1525
if(!insert.hasOwnProperty(token)){ret[token]=grammar[token]}}}var old=root[inside];root[inside]=ret;// Update references in other language definitions
_.languages.DFS(_.languages,function(key,value){if(value===old&&key!=inside){this[key]=ret}});return ret},// Traverse a language definition with Depth First Search
DFS:function DFS(o,callback,type,visited){visited=visited||{};var objId=_.util.objId;for(var i in o){if(o.hasOwnProperty(i)){callback.call(o,i,o[i],type||i);var property=o[i],propertyType=_.util.type(property);if("Object"===propertyType&&!visited[objId(property)]){visited[objId(property)]=!0;DFS(property,callback,null,visited)}else if("Array"===propertyType&&!visited[objId(property)]){visited[objId(property)]=!0;DFS(property,callback,i,visited)}}}}},plugins:{},highlightAll:function(async,callback){_.highlightAllUnder(document,async,callback)},highlightAllUnder:function(container,async,callback){var env={callback:callback,selector:"code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"};_.hooks.run("before-highlightall",env);for(var elements=container.querySelectorAll(env.selector),i=0,element;element=elements[i++];){_.highlightElement(element,!0===async,env.callback)}},highlightElement:function(element,async,callback){// Find language
var language="none",grammar,parent=element;while(parent&&!lang.test(parent.className)){parent=parent.parentNode}if(parent){language=(parent.className.match(lang)||[,"none"])[1].toLowerCase();grammar=_.languages[language]}// Set language on the element, if not present
element.className=element.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language;if(element.parentNode){// Set language on the parent, for styling
parent=element.parentNode;if(/pre/i.test(parent.nodeName)){parent.className=parent.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language}}var code=element.textContent,env={element:element,language:language,grammar:grammar,code:code},insertHighlightedCode=function(highlightedCode){env.highlightedCode=highlightedCode;_.hooks.run("before-insert",env);env.element.innerHTML=env.highlightedCode;_.hooks.run("after-highlight",env);_.hooks.run("complete",env);callback&&callback.call(env.element)};_.hooks.run("before-sanity-check",env);if(!env.code){_.hooks.run("complete",env);return}_.hooks.run("before-highlight",env);if(!env.grammar){insertHighlightedCode(_.util.encode(env.code));return}if(async&&_self.Worker){var worker=new Worker(_.filename);worker.onmessage=function(evt){insertHighlightedCode(evt.data)};worker.postMessage(JSON.stringify({language:env.language,code:env.code,immediateClose:!0}))}else{insertHighlightedCode(_.highlight(env.code,env.grammar,env.language))}},highlight:function(text,grammar,language){var env={code:text,grammar:grammar,language:language};_.hooks.run("before-tokenize",env);env.tokens=_.tokenize(env.code,env.grammar);_.hooks.run("after-tokenize",env);return Token.stringify(_.util.encode(env.tokens),env.language)},matchGrammar:function(text,strarr,grammar,index,startPos,oneshot,target){for(var token in grammar){if(!grammar.hasOwnProperty(token)||!grammar[token]){continue}if(token==target){return}var patterns=grammar[token];patterns="Array"===_.util.type(patterns)?patterns:[patterns];for(var j=0;j<patterns.length;++j){var pattern=patterns[j],inside=pattern.inside,lookbehind=!!pattern.lookbehind,greedy=!!pattern.greedy,lookbehindLength=0,alias=pattern.alias;if(greedy&&!pattern.pattern.global){// Without the global flag, lastIndex won't work
var flags=pattern.pattern.toString().match(/[imuy]*$/)[0];pattern.pattern=RegExp(pattern.pattern.source,flags+"g")}pattern=pattern.pattern||pattern;// Don’t cache length as it changes during the loop
for(var i=index,pos=startPos,str;i<strarr.length;pos+=strarr[i].length,++i){str=strarr[i];if(strarr.length>text.length){// Something went terribly wrong, ABORT, ABORT!
return}if(str instanceof Token){continue}if(greedy&&i!=strarr.length-1){pattern.lastIndex=pos;var match=pattern.exec(text);if(!match){break}for(var from=match.index+(lookbehind?match[1].length:0),to=match.index+match[0].length,k=i,p=pos,len=strarr.length;k<len&&(p<to||!strarr[k].type&&!strarr[k-1].greedy);++k){p+=strarr[k].length;// Move the index i to the element in strarr that is closest to from
if(from>=p){++i;pos=p}}// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
if(strarr[i]instanceof Token){continue}// Number of tokens to delete and replace with the new match
delNum=k-i;str=text.slice(pos,p);match.index-=pos}else{pattern.lastIndex=0;var match=pattern.exec(str),delNum=1}if(!match){if(oneshot){break}continue}if(lookbehind){lookbehindLength=match[1]?match[1].length:0}var from=match.index+lookbehindLength,match=match[0].slice(lookbehindLength),to=from+match.length,before=str.slice(0,from),after=str.slice(to),args=[i,delNum];if(before){++i;pos+=before.length;args.push(before)}var wrapped=new Token(token,inside?_.tokenize(match,inside):match,alias,match,greedy);args.push(wrapped);if(after){args.push(after)}Array.prototype.splice.apply(strarr,args);if(1!=delNum)_.matchGrammar(text,strarr,grammar,i,pos,!0,token);if(oneshot)break}}}},tokenize:function(text,grammar){var strarr=[text],rest=grammar.rest;if(rest){for(var token in rest){grammar[token]=rest[token]}delete grammar.rest}_.matchGrammar(text,strarr,grammar,0,0,!1);return strarr},hooks:{all:{},add:function(name,callback){var hooks=_.hooks.all;hooks[name]=hooks[name]||[];hooks[name].push(callback)},run:function(name,env){var callbacks=_.hooks.all[name];if(!callbacks||!callbacks.length){return}for(var i=0,callback;callback=callbacks[i++];){callback(env)}}},Token:Token};_self.Prism=_;function Token(type,content,alias,matchedStr,greedy){this.type=type;this.content=content;this.alias=alias;// Copy of the full string this token was created from
this.length=0|(matchedStr||"").length;this.greedy=!!greedy}Token.stringify=function(o,language){if("string"==typeof o){return o}if(Array.isArray(o)){return o.map(function(element){return Token.stringify(element,language)}).join("")}var env={type:o.type,content:Token.stringify(o.content,language),tag:"span",classes:["token",o.type],attributes:{},language:language};if(o.alias){var aliases=Array.isArray(o.alias)?o.alias:[o.alias];Array.prototype.push.apply(env.classes,aliases)}_.hooks.run("wrap",env);var attributes=Object.keys(env.attributes).map(function(name){return name+"=\""+(env.attributes[name]||"").replace(/"/g,"&quot;")+"\""}).join(" ");return"<"+env.tag+" class=\""+env.classes.join(" ")+"\""+(attributes?" "+attributes:"")+">"+env.content+"</"+env.tag+">"};if(!_self.document){if(!_self.addEventListener){// in Node.js
return _}if(!_.disableWorkerMessageHandler){// In worker
_self.addEventListener("message",function(evt){var message=JSON.parse(evt.data),lang=message.language,code=message.code,immediateClose=message.immediateClose;_self.postMessage(_.highlight(code,_.languages[lang],lang));if(immediateClose){_self.close()}},!1)}return _}//Get current script and highlight
var script=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();if(script){_.filename=script.src;if(!_.manual&&!script.hasAttribute("data-manual")){if("loading"!==document.readyState){if(window.requestAnimationFrame){window.requestAnimationFrame(_.highlightAll)}else{window.setTimeout(_.highlightAll,16)}}else{document.addEventListener("DOMContentLoaded",_.highlightAll)}}}return _}(_self);/**
   * Prism: Lightweight, robust, elegant syntax highlighting
   * MIT license http://www.opensource.org/licenses/mit-license.php/
   * @author Lea Verou http://lea.verou.me
   */if("undefined"!==typeof module&&module.exports){module.exports=Prism$1}// hack for components to work correctly in node.js
if("undefined"!==typeof global){global.Prism=Prism$1}/* **********************************************
       Begin prism-markup.js
  ********************************************** */Prism$1.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};Prism$1.languages.markup.tag.inside["attr-value"].inside.entity=Prism$1.languages.markup.entity;// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism$1.hooks.add("wrap",function(env){if("entity"===env.type){env.attributes.title=env.content.replace(/&amp;/,"&")}});Object.defineProperty(Prism$1.languages.markup.tag,"addInlined",{/**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */value:function addInlined(tagName,lang){var includedCdataInside={};includedCdataInside["language-"+lang]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism$1.languages[lang]};includedCdataInside.cdata=/^<!\[CDATA\[|\]\]>$/i;var inside={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:includedCdataInside}};inside["language-"+lang]={pattern:/[\s\S]+/,inside:Prism$1.languages[lang]};var def={};def[tagName]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,tagName),"i"),lookbehind:!0,greedy:!0,inside:inside};Prism$1.languages.insertBefore("markup","cdata",def)}});Prism$1.languages.xml=Prism$1.languages.extend("markup",{});Prism$1.languages.html=Prism$1.languages.markup;Prism$1.languages.mathml=Prism$1.languages.markup;Prism$1.languages.svg=Prism$1.languages.markup;/* **********************************************
                                                   Begin prism-css.js
                                                  ********************************************** */(function(Prism){var string=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/ // See rest below
}},url:{pattern:RegExp("url\\((?:"+string.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+string.source+")*?(?=\\s*\\{)"),string:{pattern:string,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/};Prism.languages.css.atrule.inside.rest=Prism.languages.css;var markup=Prism.languages.markup;if(markup){markup.tag.addInlined("style","css");Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},markup.tag)}})(Prism$1);/* **********************************************
                Begin prism-clike.js
             ********************************************** */Prism$1.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};/* **********************************************
        Begin prism-javascript.js
   ********************************************** */Prism$1.languages.javascript=Prism$1.languages.extend("clike",{"class-name":[Prism$1.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});Prism$1.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;Prism$1.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},// This must be declared before keyword because we use "function" inside the look-forward
"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism$1.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism$1.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism$1.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism$1.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism$1.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism$1.languages.javascript}},string:/[\s\S]+/}}});if(Prism$1.languages.markup){Prism$1.languages.markup.tag.addInlined("script","javascript")}Prism$1.languages.js=Prism$1.languages.javascript;/* **********************************************
                                                      Begin prism-file-highlight.js
                                                     ********************************************** */(function(){if("undefined"===typeof self||!self.Prism||!self.document||!document.querySelector){return}/**
     * @param {Element} [container=document]
     */self.Prism.fileHighlight=function(container){container=container||document;var Extensions={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(container.querySelectorAll("pre[data-src]")).forEach(function(pre){// ignore if already loaded
if(pre.hasAttribute("data-src-loaded")){return}// load current
var src=pre.getAttribute("data-src"),language,parent=pre,lang=/\blang(?:uage)?-([\w-]+)\b/i;while(parent&&!lang.test(parent.className)){parent=parent.parentNode}if(parent){language=(pre.className.match(lang)||[,""])[1]}if(!language){var extension=(src.match(/\.(\w+)$/)||[,""])[1];language=Extensions[extension]||extension}var code=document.createElement("code");code.className="language-"+language;pre.textContent="";code.textContent="Loading\u2026";pre.appendChild(code);var xhr=new XMLHttpRequest;xhr.open("GET",src,!0);xhr.onreadystatechange=function(){if(4==xhr.readyState){if(400>xhr.status&&xhr.responseText){code.textContent=xhr.responseText;Prism$1.highlightElement(code);// mark as loaded
pre.setAttribute("data-src-loaded","")}else if(400<=xhr.status){code.textContent="\u2716 Error "+xhr.status+" while fetching file: "+xhr.statusText}else{code.textContent="\u2716 Error: File does not exist or is empty"}}};xhr.send(null)});if(Prism$1.plugins.toolbar){Prism$1.plugins.toolbar.registerButton("download-file",function(env){var pre=env.element.parentNode;if(!pre||!/pre/i.test(pre.nodeName)||!pre.hasAttribute("data-src")||!pre.hasAttribute("data-download-link")){return}var src=pre.getAttribute("data-src"),a=document.createElement("a");a.textContent=pre.getAttribute("data-download-link-label")||"Download";a.setAttribute("download","");a.href=src;return a})}};document.addEventListener("DOMContentLoaded",function(){// execute inside handler, for dropping Event as argument
self.Prism.fileHighlight()})})();// unsafeHTML directive, and the DocumentFragment that was last set as a value.
// The DocumentFragment is used as a unique key to check if the last value
// rendered to the part was with unsafeHTML. If not, we'll always re-render the
// value passed to unsafeHTML.
const previousValues=new WeakMap,unsafeHTML=directive(value=>part=>{if(!(part instanceof NodePart)){throw new Error("unsafeHTML can only be used in text bindings")}const previousValue=previousValues.get(part);if(previousValue!==void 0&&isPrimitive(value)&&value===previousValue.value&&part.value===previousValue.fragment){return}const template=document.createElement("template");template.innerHTML=value;// innerHTML casts to string internally
const fragment=document.importNode(template.content,!0);part.setValue(fragment);previousValues.set(part,{value,fragment})});/**
                                       * Renders the result as HTML, rather than text.
                                       *
                                       * Note, this is unsafe to use with any user-provided input that hasn't been
                                       * sanitized or escaped, as it may lead to cross-site-scripting
                                       * vulnerabilities.
                                       */_exports.unsafeHTML=unsafeHTML;var unsafeHtml={unsafeHTML:unsafeHTML};_exports.$unsafeHtml=unsafeHtml;class FuroMarkdown extends LitElement{constructor(){super();this.markdownRendered=void 0}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * allow unsafe md. (writing html, components,...)
       */unsafe:{type:Boolean},/**
       * source of the md
       */mdsrc:{type:String},/**
       * markdown string
       */markdown:{type:String}}}set mdsrc(src){this.fetchMd(src)}set markdown(markdown){this.markdownRendered=this._parseMarkdown(markdown);this.requestUpdate()}/**
     * fetch markdown from a url or path
     * @param src
     * @return {Promise<string | never>}
     */fetchMd(src){return fetch(src).then(res=>res.text()).then(markdown=>{this.markdown=markdown})}/**
     * Parse markdown string to html content
     * @param markdown
     */parseMarkdown(markdown){if("string"==typeof markdown){this.markdown=markdown}}/**
     * parse markdown string to html content
     * @param markdown
     * @return {TemplateResult | TemplateResult}
     */_parseMarkdown(markdown){let md=window.markdownit({html:this.unsafe,linkify:!0,typographer:!0});return html`${unsafeHTML(md.render(markdown))}`}updated(){// code highlighter
Prism.highlightAllUnder(this.shadowRoot)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return Theme.getThemeForComponent(this.name)||css`
        :host {
            display: block;
            background-color: var(--surface, white);
            color: var(--on-surface, black);
        }

        :host([hidden]) {
            display: none;
        }

        img {
            max-width: 100%;
        }


        h1 {
            font-size: 2.8rem;
            font-weight: 400;
            line-height: 3.5rem;
            letter-spacing: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 0;
        }

        h2 {
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }

        blockquote {
            border-left: 3px solid var(--blockquote);
            margin-left: 0;
            padding-left: var(--spacing);
        }

        /**
     * prism.js default theme for JavaScript, CSS and HTML
     * Based on dabblet (http://dabblet.com)
     * @author Lea Verou
     */
        code[class*="language-"],
        pre[class*="language-"] {
            color: black;
            background: none;
            text-shadow: 0 1px white;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            font-size: 1em;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;

            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;

            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
        }

        pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
        code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
            text-shadow: none;
            background: #b3d4fc;
        }

        pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
        code[class*="language-"]::selection, code[class*="language-"] ::selection {
            text-shadow: none;
            background: #b3d4fc;
        }

        @media print {
            code[class*="language-"],
            pre[class*="language-"] {
                text-shadow: none;
            }
        }

        /* Code blocks */
        pre[class*="language-"] {
            padding: 1em;
            margin: 0;
            overflow: auto;
        }

        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
            background: #f5f2f0;
        }

        /* Inline code */
        :not(pre) > code[class*="language-"] {
            padding: .1em;
            border-radius: .3em;
            white-space: normal;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: slategray;
        }

        .token.punctuation {
            color: #999;
        }

        .namespace {
            opacity: .7;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
            color: #905;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
            color: #690;
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
            color: #9a6e3a;
            background: hsla(0, 0%, 100%, .5);
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
            color: #07a;
        }

        .token.function,
        .token.class-name {
            color: #DD4A68;
        }

        .token.regex,
        .token.important,
        .token.variable {
            color: #e90;
        }

        .token.important,
        .token.bold {
            font-weight: bold;
        }

        .token.italic {
            font-style: italic;
        }

        .token.entity {
            cursor: help;
        }



    `}render(){return html`    
      ${this.markdownRendered}`}}window.customElements.define("furo-markdown",FuroMarkdown)});