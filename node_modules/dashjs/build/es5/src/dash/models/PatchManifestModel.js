'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _DashConstants=require('../constants/DashConstants');var _DashConstants2=_interopRequireDefault(_DashConstants);var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _Debug=require('../../core/Debug');var _Debug2=_interopRequireDefault(_Debug);var _SimpleXPath=require('../vo/SimpleXPath');var _SimpleXPath2=_interopRequireDefault(_SimpleXPath);var _PatchOperation=require('../vo/PatchOperation');var _PatchOperation2=_interopRequireDefault(_PatchOperation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function PatchManifestModel(){var instance=void 0,logger=void 0;var context=this.context;function setup(){logger=(0,_Debug2.default)(context).getInstance().getLogger(instance);}function getIsPatch(patch){return patch&&patch.hasOwnProperty(_DashConstants2.default.ORIGINAL_MPD_ID)||false;}function getPublishTime(patch){return patch&&patch.hasOwnProperty(_DashConstants2.default.PUBLISH_TIME)?new Date(patch[_DashConstants2.default.PUBLISH_TIME]):null;}function getOriginalPublishTime(patch){return patch&&patch.hasOwnProperty(_DashConstants2.default.ORIGINAL_PUBLISH_TIME)?new Date(patch[_DashConstants2.default.ORIGINAL_PUBLISH_TIME]):null;}function getMpdId(patch){return patch&&patch[_DashConstants2.default.ORIGINAL_MPD_ID]||null;}function getPatchOperations(patch){if(!patch){return[];}// Go through the patch operations in order and parse their actions out for usage
return(patch.__children||[]).map(function(nodeContainer){var action=Object.keys(nodeContainer)[0];// we only look add add/remove/replace actions
if(action!=='add'&&action!=='remove'&&action!=='replace'){logger.warn('Ignoring node of invalid action: '+action);return null;}var node=nodeContainer[action];var selector=node.sel;// add action can have special targeting via the 'type' attribute
if(action==='add'&&node.type){if(!node.type.startsWith('@')){logger.warn('Ignoring add action for prefixed namespace declaration: '+node.type+'='+node.__text);return null;}// for our purposes adding/replacing attribute are equivalent and we can normalize
// our processing logic by appending the attribute to the selector path
selector=selector+'/'+node.type;}var xpath=new _SimpleXPath2.default(selector);if(!xpath.isValid()){logger.warn('Ignoring action with invalid selector: '+action+' - '+selector);return null;}var value=null;if(xpath.findsAttribute()){value=node.__text||'';}else if(action!=='remove'){value=node.__children.reduce(function(groups,child){// note that this is informed by xml2js parse structure for the __children array
// which will be something like this for each child:
// {
//     "<node-name>": { <xml2js-node-object> }
// }
var key=Object.keys(child)[0];// we also ignore
if(key!=='#text'){groups[key]=groups[key]||[];groups[key].push(child[key]);}return groups;},{});}var operation=new _PatchOperation2.default(action,xpath,value);if(action==='add'){operation.position=node.pos;}return operation;}).filter(function(operation){return!!operation;});}instance={getIsPatch:getIsPatch,getPublishTime:getPublishTime,getOriginalPublishTime:getOriginalPublishTime,getMpdId:getMpdId,getPatchOperations:getPatchOperations};setup();return instance;}/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */PatchManifestModel.__dashjs_factory_name='PatchManifestModel';exports.default=_FactoryMaker2.default.getSingletonFactory(PatchManifestModel);
//# sourceMappingURL=PatchManifestModel.js.map
