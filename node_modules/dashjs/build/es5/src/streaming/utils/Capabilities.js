'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.supportsMediaSource=supportsMediaSource;var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _ThumbnailTracks=require('../thumbnail/ThumbnailTracks');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
 */var codecCompatibilityTable=[{'codec':'avc1','compatibleCodecs':['avc3']},{'codec':'avc3','compatibleCodecs':['avc1']}];function supportsMediaSource(){var hasWebKit='WebKitMediaSource'in window;var hasMediaSource='MediaSource'in window;return hasWebKit||hasMediaSource;}function Capabilities(){var instance=void 0,encryptedMediaSupported=void 0;function setup(){encryptedMediaSupported=false;}/**
     * Returns whether Encrypted Media Extensions are supported on this
     * user agent
     *
     * @return {boolean} true if EME is supported, false otherwise
     */function supportsEncryptedMedia(){return encryptedMediaSupported;}/**
     *
     * @param {boolean} value
     */function setEncryptedMediaSupported(value){encryptedMediaSupported=value;}/**
     * Check if a codec is supported by the MediaSource
     * @param {string} codec
     * @return {boolean}
     */function supportsCodec(codec){if('MediaSource'in window&&MediaSource.isTypeSupported(codec)){return true;}if('WebKitMediaSource'in window&&WebKitMediaSource.isTypeSupported(codec)){return true;}return false;}/**
     * Check if a specific EssentialProperty is supported
     * @param {object} ep
     * @return {boolean}
     */function supportsEssentialProperty(ep){try{return _ThumbnailTracks.THUMBNAILS_SCHEME_ID_URIS.indexOf(ep.schemeIdUri)!==-1;}catch(e){return true;}}/**
     * Check if the root of the old codec is the same as the new one, or if it's declared as compatible in the compat table
     * @param {string} codec1
     * @param {string} codec2
     * @return {boolean}
     */function codecRootCompatibleWithCodec(codec1,codec2){var codecRoot=codec1.split('.')[0];var rootCompatible=codec2.indexOf(codecRoot)===0;var compatTableCodec=void 0;for(var i=0;i<codecCompatibilityTable.length;i++){if(codecCompatibilityTable[i].codec===codecRoot){compatTableCodec=codecCompatibilityTable[i];break;}}if(compatTableCodec){return rootCompatible||compatTableCodec.compatibleCodecs.some(function(compatibleCodec){return codec2.indexOf(compatibleCodec)===0;});}return rootCompatible;}instance={supportsMediaSource:supportsMediaSource,supportsEncryptedMedia:supportsEncryptedMedia,supportsCodec:supportsCodec,setEncryptedMediaSupported:setEncryptedMediaSupported,supportsEssentialProperty:supportsEssentialProperty,codecRootCompatibleWithCodec:codecRootCompatibleWithCodec};setup();return instance;}Capabilities.__dashjs_factory_name='Capabilities';exports.default=_FactoryMaker2.default.getSingletonFactory(Capabilities);
//# sourceMappingURL=Capabilities.js.map
