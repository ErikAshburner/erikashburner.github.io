"use strict";
var main;(function($rt_globals){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end
=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData
=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data)
{var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data)
{var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta
={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum
=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache
===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long",
"J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex)
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException
=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,
javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,
arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+
1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage.toString();}}return this[defaultMessage];}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e)
{return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item)
{++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName
+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if
(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val
|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val)
{return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv
=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function()
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.bo=f;}
function $rt_cls(cls){return A.DC(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return A.Ec(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.m.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return A.A; }
function $rt_stecls(){return A.A;}
function $rt_throwableMessage(t){return A.D$(t);}
function $rt_throwableCause(t){return A.D_(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A.Ej());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A.Ek(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var H=$rt_throw;var S=$rt_compare;var Bm=$rt_nullCheck;var R=$rt_cls;var V=$rt_createArray;var Bk=$rt_isInstance;var Bn=$rt_nativeThread;var Bo=$rt_suspending;var Bp=$rt_resuming;var Bq=$rt_invalidPointer;var D=$rt_s;var P=$rt_eraseClinit;var Bi=$rt_imul;var Be=$rt_wrapException;var Br=$rt_checkBounds;var Bs=$rt_checkUpperBound;var Bt=$rt_checkLowerBound;var Bu=$rt_wrapFunction0;var Bv=$rt_wrapFunction1;var Bw=$rt_wrapFunction2;var Bx=$rt_wrapFunction3;var By=$rt_wrapFunction4;var B=$rt_classWithoutFields;var Bl
=$rt_createArrayFromData;var Bz=$rt_createCharArrayFromData;var BA=$rt_createByteArrayFromData;var BB=$rt_createShortArrayFromData;var W=$rt_createIntArrayFromData;var BC=$rt_createBooleanArrayFromData;var BD=$rt_createFloatArrayFromData;var BE=$rt_createDoubleArrayFromData;var BF=$rt_createLongArrayFromData;var BG=$rt_createBooleanArray;var Bb=$rt_createByteArray;var BH=$rt_createShortArray;var Q=$rt_createCharArray;var N=$rt_createIntArray;var BI=$rt_createLongArray;var BJ=$rt_createFloatArray;var BK=$rt_createDoubleArray;var S
=$rt_compare;var BL=$rt_castToClass;var BM=$rt_castToInterface;var BN=Long_toNumber;var C=Long_fromInt;var BO=Long_fromNumber;var F=Long_create;var K=Long_ZERO;var BP=Long_hi;var G=Long_lo;
A.A=function(){this.$id$=0;};
A.B7=function(a){return A.DC(a.constructor);};
A.DV=function(a){var b,c,d,e,f,g,h,i,j;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=D(0);else{f=(((32-A.BZ(d)|0)+4|0)-1|0)/4|0;g=Q(f);h=g.data;f=(f-1|0)*4|0;i=0;while(f>=0){j=i+1|0;h[i]=A.Bo(d>>>f&15,16);f=f-4|0;i=j;}e=A.Ec(g);}b=A.O();A.B(A.B(b,D(1)),e);return A.J(b);};
A.D4=function(a){var b,c,d;if(!Bk(a,A.CJ)&&a.constructor.$meta.item===null){b=new A.B9;A.G(b);H(b);}b=A.DT(a);c=b;d=$rt_nextId();c.$id$=d;return b;};
A.Dz=B();
A.Ee=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;A.DD();A.C9();A.Dk();A.Dt();A.C8();A.C5();A.C2();A.DB();b=b.data;c=A.CZ();d=b[0];if(d!==null&&!A.BN(d)){a:{e=0;f=0;switch(A.Y(d,0)){case 43:f=1;break a;case 45:e=1;f=1;break a;default:}}g=0;if(f==A.P(d)){d=new A.Z;A.G(d);H(d);}b:{while(true){if(f>=A.P(d)){if(e)g= -g|0;break b;}h=f+1|0;i=A.Y(d,f);if(A.El===null){if(A.Em===null)A.Em=A.CV();j=(A.Em.value!==null?$rt_str(A.Em.value):null);k=new A.CH;b=j.m.data;l=Q(b.length);m=l.data;f=0;n=m.length;while(f<n){m[f]
=b[f];f=f+1|0;}k.bg=l;f=A.Db(k);b=N(f*2|0);l=b.data;n=0;o=0;p=0;q=0;while(q<f){o=o+A.Dj(k)|0;p=p+A.Dj(k)|0;r=n+1|0;l[n]=o;n=r+1|0;l[r]=p;q=q+1|0;}A.El=b;}b=A.El.data;n=0;o=(b.length/2|0)-1|0;c:{while(o>=n){p=(n+o|0)/2|0;f=p*2|0;q=S(i,b[f]);if(q>0)n=p+1|0;else{if(q>=0){f=b[f+1|0];break c;}o=p-1|0;}}f=(-1);}if(f<0)break;if(f>=10){j=new A.Z;k=A.O();A.B(A.B(A.H(A.B(k,D(2)),10),D(3)),d);A.F(j,A.J(k));H(j);}g=(10*g|0)+f|0;if(g<0){if(h==A.P(d)&&g==(-2147483648)&&e){g=(-2147483648);break b;}j=new A.Z;k=A.O();A.B(A.B(k,
D(4)),d);A.F(j,A.J(k));H(j);}f=h;}j=new A.Z;k=A.O();A.B(A.B(k,D(5)),d);A.F(j,A.J(k));H(j);}f=0;d=A.Eg();while(g>0){if(g>=10){n=0;while(n<10){A.Cp(A.Ba(),A.BY(d));n=n+1|0;}f=f+10|0;}else{n=0;while(n<g){A.Cp(A.Ba(),A.BY(d));n=n+1|0;}n=g;while(n<10){A.Cm(A.Ba(),D(6));n=n+1|0;}f=f+g|0;}A.Cm(A.Ba(),D(7));A.C3(A.Ba(),f);A.Dr(A.Ba());g=g+(-10)|0;}d=A.Ba();c=J(A.CZ(),c);j=A.O();k=A.B(j,D(8));A.C$(k,k.e,c,10);j=A.J(j);A.Bh(A.Cj(d.n,j),10);A.Bz(d);return;}d=new A.Z;A.F(d,D(9));H(d);};
A.Cs=B(0);
A.B$=B(0);
A.Cz=function(){A.A.call(this);this.x=null;};
A.DC=function(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new A.Cz;c.x=b;d=c;b.classObject=d;}return c;};
A.BA=function(a){return a.x.$meta.primitive?1:0;};
A.Cc=function(a){return A.DC(a.x.$meta.item);};
A.Dv=B();
A.De=B();
A.DT=function(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;};
A.DH=function(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(A.DH(d[e],c))return 1;e=e+1|0;}return 0;};
A.Bl=B(0);
A.S=B(0);
A.Bv=B(0);
A.Bp=function(){var a=this;A.A.call(a);a.m=null;a.u=0;};
A.En=null;A.Ec=function(a){var b=new A.Bp();A.Dn(b,a);return b;};
A.Dn=function(a,b){var c,d,e,f;b=b.data;c=b.length;d=Q(c);e=d.data;a.m=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}};
A.Y=function(a,b){var c,d;if(b>=0){c=a.m.data;if(b<c.length)return c[b];}d=new A.BL;A.G(d);H(d);};
A.P=function(a){return a.m.data.length;};
A.BN=function(a){return a.m.data.length?0:1;};
A.Ea=function(a,b){var c;if(a===b)return 1;if(!(b instanceof A.Bp))return 0;if(A.P(b)!=A.P(a))return 0;c=0;while(c<A.P(b)){if(A.Y(a,c)!=A.Y(b,c))return 0;c=c+1|0;}return 1;};
A.D7=function(a){var b,c,d,e;a:{if(!a.u){b=a.m.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.u=(31*a.u|0)+e|0;d=d+1|0;}}}return a.u;};
A.DD=function(){A.En=new A.B6;};
A.Bk=function(){var a=this;A.A.call(a);a.bm=null;a.bl=null;a.G=0;a.M=0;};
A.Eo=function(a){var b=new A.Bk();A.F(b,a);return b;};
A.Ep=function(a){var b=new A.Bk();A.DA(b,a);return b;};
A.F=function(a,b){a.G=1;a.M=1;a.bm=b;};
A.DA=function(a,b){a.G=1;a.M=1;a.bl=b;};
A.DX=function(a){return a;};
A.D$=function(a){return a.bm;};
A.D_=function(a){var b;b=a.bl;if(b===a)b=null;return b;};
A.Bi=B(A.Bk);
A.Br=B(A.Bi);
A.CT=B(A.Br);
A.Bm=B();
A.Ch=B(A.Bm);
A.Eq=null;A.BZ=function(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;};
A.C9=function(){A.Eq=R($rt_intcls());};
A.BV=function(){var a=this;A.A.call(a);a.d=null;a.e=0;};
A.C$=function(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Bd(c,K)){e=0;c=Y(c);}a:{f=C(d);if(Bd(c,f)){if(e)A.X(a,b,b+1|0);else{A.X(a,b,b+2|0);g=a.d.data;h=b+1|0;g[b]=45;b=h;}a.d.data[b]=A.Bo(G(c),d);}else{i=1;j=C(1);while(true){k=Ba(j,f);if(U(k,j))break;if(Z(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;A.X(a,b,b+i|0);if(e)i=b;else{g=a.d.data;i=b+1|0;g[b]=45;}while(true){if(U(j,K))break a;g=a.d.data;b=i+1|0;g[i]=A.Bo(G(T(c,j)),d);c=X(c,j);j=T(j,f);i=b;}}}return a;};
A.X=function(a,b,c){var d,e,f,g;d=a.e;e=d-b|0;A.CG(a,(d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.d.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.e=a.e+(c-b|0)|0;};
A.B1=B(0);
A.C7=B(A.BV);
A.O=function(){var a=new A.C7();A.DU(a);return a;};
A.DU=function(a){a.d=Q(16);};
A.B=function(a,b){var c;c=a.e;if(b===null)b=D(10);A.CK(a,c,b);return a;};
A.Cj=function(a,b){A.CK(a,a.e,b);return a;};
A.H=function(a,b){var c,d,e,f,g,h,i;c=a.e;d=1;if(b<0){d=0;b= -b|0;}a:{if(b<10){if(d)A.X(a,c,c+1|0);else{A.X(a,c,c+2|0);e=a.d.data;f=c+1|0;e[c]=45;c=f;}a.d.data[c]=A.Bo(b,10);}else{g=1;h=1;b:{while(true){f=g*10|0;if(f>b){f=g;break b;}h=h+1|0;if(f>214748364)break;g=f;}}if(!d)h=h+1|0;A.X(a,c,c+h|0);if(d)i=c;else{e=a.d.data;i=c+1|0;e[c]=45;}while(true){if(f<=0)break a;e=a.d.data;g=i+1|0;e[i]=A.Bo(b/f|0,10);b=b%f|0;f=f/10|0;i=g;}}}return a;};
A.Bh=function(a,b){var c;c=a.e;A.X(a,c,c+1|0);a.d.data[c]=b;return a;};
A.Dx=function(a,b){a.e=b;};
A.J=function(a){var b,c,d,e,f,g;b=new A.Bp;c=a.d;d=a.e;e=Q(d);f=e.data;b.m=e;g=0;while(g<d){f[g]=c.data[g+0|0];g=g+1|0;}return b;};
A.CG=function(a,b){var c,d,e,f;c=a.d.data.length;if(c<b){b=c>=1073741823?2147483647:A.Cf(b,A.Cf(c*2|0,5));d=a.d.data;e=Q(b);f=e.data;b=A.BS(b,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.d=e;}};
A.CK=function(a,b,c){var d,e,f;if(b>=0&&b<=a.e){a:{if(c===null)c=D(10);else if(A.BN(c))break a;A.CG(a,a.e+A.P(c)|0);d=a.e-1|0;while(d>=b){a.d.data[d+A.P(c)|0]=a.d.data[d];d=d+(-1)|0;}a.e=a.e+A.P(c)|0;d=0;while(d<A.P(c)){e=a.d.data;f=b+1|0;e[b]=A.Y(c,d);d=d+1|0;b=f;}}return a;}c=new A.BL;A.G(c);H(c);};
A.Bn=B(A.Br);
A.DO=B(A.Bn);
A.Er=function(a){var b=new A.DO();A.DY(b,a);return b;};
A.DY=function(a,b){A.F(a,b);};
A.Du=B(A.Bn);
A.Es=function(a){var b=new A.Du();A.D3(b,a);return b;};
A.D3=function(a,b){A.F(a,b);};
A.V=B(A.Bk);
A.Et=function(){var a=new A.V();A.G(a);return a;};
A.G=function(a){a.G=1;a.M=1;};
A.C=B(A.V);
A.Ek=function(a){var b=new A.C();A.CY(b,a);return b;};
A.CY=function(a,b){A.F(a,b);};
A.Cb=B();
A.Eu=null;A.Ba=function(){var b;if(A.Eu===null){b=new A.CB;b.B=A.Ev;b.n=A.O();b.bt=Q(32);b.bC=0;b.bn=A.Ew;A.Eu=b;}return A.Eu;};
A.Bt=function(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=A.Df(b)&&(e+f|0)<=A.Df(d)){a:{b:{if(b!==d){g=A.Cc(A.B7(b));h=A.Cc(A.B7(d));if(g!==null&&h!==null){if(g===h)break b;if(!A.BA(g)&&!A.BA(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.x;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&A.DH(n.constructor,o)?1:0)){A.Cv(b,c,d,e,j);b=new A.BB;A.G(b);H(b);}j=j+1|0;k=m;}A.Cv(b,c,d,e,f);return;}if(!A.BA(g))break a;if(A.BA(h))break b;else break a;}b
=new A.BB;A.G(b);H(b);}}A.Cv(b,c,d,e,f);return;}b=new A.BB;A.G(b);H(b);}b=new A.N;A.G(b);H(b);}d=new A.Cd;A.F(d,D(11));H(d);};
A.Cv=function(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}};
A.CZ=function(){return Long_fromNumber(new Date().getTime());};
A.DI=function(){var a=this;A.A.call(a);a.o=null;a.ba=null;a.br=null;};
A.Eg=function(){var a=new A.DI();A.DS(a);return a;};
A.DS=function(a){a.o=A.Dl(1,0,0,1);a.ba=A.Dl(0,0,0,0);a.br=A.Dl(0,0,0,0);};
A.BY=function(a){var b,c,d;b=A.CD(a.o,3);if(b!=A.CD(a.o,4)?0:1){c=a.br;d=(-10)*b|0;c.h=A.D(C(10));c.i=A.D(C(d));c.j=A.D(K);c.g=A.D(C(1));c.p=0;a.o=A.Cg(c,a.o);return b;}c=a.ba;d=c.p+1|0;c.p=d;c.h=A.D(C(d));c.i=A.D(C((4*c.p|0)+2|0));c.j=A.D(K);c.g=A.D(C((2*c.p|0)+1|0));a.o=A.Cg(a.o,c);return A.BY(a);};
A.DM=B();
A.Ce=function(){var a=this;A.A.call(a);a.h=null;a.i=null;a.j=null;a.g=null;a.p=0;};
A.Dl=function(a,b,c,d){var e=new A.Ce();A.D2(e,a,b,c,d);return e;};
A.D2=function(a,b,c,d,e){a.h=A.D(C(b));a.i=A.D(C(c));a.j=A.D(C(d));a.g=A.D(C(e));a.p=0;};
A.CD=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=A.D(C(b));d=A.Q(A.M(a.h,c),a.i);e=A.Q(A.M(a.j,c),a.g);b=e.c;if(!b){c=new A.B3;A.F(c,D(12));H(c);}f=e.b;g=S(f,1);if(!(!g&&e.a.data[0]==1?1:0)){h=d.c;i=d.b;if((i+f|0)==2){j=T(E(C(d.a.data[0]),F(4294967295, 0)),E(C(e.a.data[0]),F(4294967295, 0)));if(h!=b)j=Y(j);d=A.D(j);}else{k=S(i,f);k=!k?A.Ct(d.a,e.a,i):k<=0?(-1):1;if(!k)d=h!=b?A.Ex:A.Ey;else if(k==(-1))d=A.Ez;else{k=(i-f|0)+1|0;l=N(k);h=h!=b?(-1):1;if(g)A.D8(l,k,d.a,i,e.a,f);else{m=l.data;n=d.a;o
=e.a.data[0];p=K;q=E(C(o),F(4294967295, 0));f=i-1|0;r=C(o>>>1);i=o&1;s=O(q,1);while(f>=0){t=n.data;u=Bg(O(p,32),E(C(t[f]),F(4294967295, 0)));if(Bc(u,K)){j=T(u,q);p=X(u,q);}else{v=L(u,1);j=T(v,r);p=I(O(X(v,r),1),E(u,C(1)));if(i){if(U(j,p))p=J(p,j);else if(Z(J(j,p),q)){p=I(p,J(s,j));j=J(j,C(2));}else{p=I(p,J(q,j));j=J(j,C(1));}}}m[f]=G(E(j,F(4294967295, 0)));f=f+(-1)|0;}}d=A.U(h,k,l);A.Be(d);}}}else if(b<=0)d=A.Cu(d);return Bi(d.c,d.a.data[0]);};
A.Cg=function(a,b){var c,d,e,f;c=new A.Ce;d=A.M(a.h,b.h);e=A.Q(A.M(a.h,b.i),A.M(a.i,b.g));f=A.Q(A.M(a.j,b.h),A.M(a.g,b.j));b=A.Q(A.M(a.j,b.i),A.M(a.g,b.g));c.h=d;c.i=e;c.j=f;c.g=b;c.p=0;return c;};
A.Cy=B(0);
A.Cx=B(0);
A.Cr=B(0);
A.Bg=B();
A.CW=function(a){};
A.BT=function(){A.Bg.call(this);this.B=null;};
A.CB=function(){var a=this;A.BT.call(a);a.bC=0;a.w=0;a.n=null;a.bt=null;a.bn=null;};
A.CF=function(a,b,c,d){var $$je;if(!A.B8(a))return;a:{try{A.Dm(a.B,b,c,d);break a;}catch($$e){$$je=Be($$e);if($$je instanceof A.BK){}else{throw $$e;}}a.w=1;}};
A.Dr=function(a){var $$je;if(!A.B8(a))return;a:{try{A.CW(a.B);break a;}catch($$e){$$je=Be($$e);if($$je instanceof A.BK){}else{throw $$e;}}a.w=1;}};
A.B8=function(a){if(a.B===null)a.w=1;return a.w?0:1;};
A.Cp=function(a,b){A.H(a.n,b);A.Bz(a);};
A.Cm=function(a,b){A.Cj(a.n,b);A.Bz(a);};
A.C3=function(a,b){A.Bh(A.H(a.n,b),10);A.Bz(a);};
A.Bz=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;b=a.n;c=b.e;d=a.bt;if(c>d.data.length)d=Q(c);e=0;f=0;if(e>c){b=new A.N;A.F(b,D(13));H(b);}while(e<c){g=d.data;h=f+1|0;i=b.d.data;j=e+1|0;g[f]=i[e];f=h;e=j;}g=d.data;e=c-0|0;k=new A.Ca;c=g.length;e=0+e|0;A.Cn(k,c);k.f=0;k.k=e;k.bj=0;k.bE=0;k.bp=d;d=Bb(A.Cf(16,A.BS(c,1024)));e=d.data.length;l=new A.CQ;h=0+e|0;A.Cn(l,e);l.bP=A.EA;l.bd=0;l.Q=d;l.f=0;l.k=h;l.bB=0;l.bk=0;m=a.bn;n=new A.CN;i=Bb(1);g=i.data;g[0]=63;b=A.EB;n.I=b;n.K=b;f=g.length;if(f&&f>=n.O){n.bM
=m;n.P=i.bo();n.bu=2.0;n.O=4.0;n.bi=Q(512);n.X=Bb(512);b=A.EC;if(b===null){l=new A.T;A.F(l,D(14));H(l);}n.I=b;n.K=b;while(n.A!=3){n.A=2;a:{while(true){try{o=A.CS(n,k,l);}catch($$e){$$je=Be($$e);if($$je instanceof A.C){b=$$je;l=new A.B4;A.DA(l,b);H(l);}else{throw $$e;}}if(o.t?0:1){e=A.W(k);if(e<=0)break a;o=A.B2(e);}else if(A.BX(o))break;b=!A.CO(o)?n.I:n.K;b:{if(b!==A.EC){if(b===A.ED)break b;else break a;}e=A.W(l);g=n.P;j=g.data.length;if(e<j){o=A.EE;break a;}A.CR(l,g,0,j);}j=k.f;if(!(!A.DJ(o)&&!A.CO(o)?0:1))
{b=new A.By;A.G(b);H(b);}A.B5(k,j+o.bb|0);}}e=A.BX(o);A.CF(a,d,0,l.f);A.B_(l);if(!e){while(true){e=n.A;if(e!=2&&e!=4){b=new A.BP;A.G(b);H(b);}b=A.EF;if(b===b)n.A=3;e=A.BX(b);A.CF(a,d,0,l.f);A.B_(l);if(!e)break;}A.Dx(a.n,0);return;}}b=new A.BP;A.G(b);H(b);}l=new A.T;A.CY(l,D(15));H(l);};
A.BD=function(){A.Bg.call(this);this.bD=null;};
A.BH=B(A.BD);
A.Ev=null;A.Dm=function(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}};
A.Dk=function(){var b;b=new A.BH;b.bD=Bb(1);A.Ev=b;};
A.Cl=B(0);
A.B6=B();
A.Bb=B();
A.EG=null;A.El=null;A.EH=null;A.Em=null;A.CI=function(b){return (b&64512)!=55296?0:1;};
A.CA=function(b){return (b&64512)!=56320?0:1;};
A.Bo=function(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;};
A.Dt=function(){A.EG=R($rt_charcls());A.EH=V(A.Bb,128);};
A.CV=function(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};};
A.T=B(A.C);
A.Z=B(A.T);
A.L=function(){var a=this;A.Bm.call(a);a.a=null;a.b=0;a.c=0;a.H=0;};
A.Ez=null;A.Ey=null;A.EI=null;A.Ex=null;A.EJ=null;A.EK=null;A.R=function(){A.R=P(A.L);A.D9();};
A.K=function(a,b){var c=new A.L();A.Dg(c,a,b);return c;};
A.U=function(a,b,c){var d=new A.L();A.Da(d,a,b,c);return d;};
A.DW=function(a,b){var c=new A.L();A.Dc(c,a,b);return c;};
A.Dg=function(a,b,c){var d;A.R();a.H=(-2);a.c=b;a.b=1;d=N(1);d.data[0]=c;a.a=d;};
A.Da=function(a,b,c,d){A.R();a.H=(-2);a.c=b;a.b=c;a.a=d;};
A.Dc=function(a,b,c){var d;A.R();a.H=(-2);a.c=b;if(Bf(E(c,F(0, 4294967295)),K)){a.b=1;d=N(1);d.data[0]=G(c);a.a=d;}else{a.b=2;a.a=W([G(c),BP(c)]);}};
A.D=function(b){A.R();if(Bd(b,K)){if(Bf(b,C(-1)))return A.Ex;return A.DW((-1),Y(b));}if(Z(b,C(10)))return A.DW(1,b);return A.EJ.data[G(b)];};
A.Cu=function(a){var b;b=a.c;return !b?a:A.U( -b|0,a.b,a.a);};
A.Q=function(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.c;d=b.c;if(c){if(!d)b=a;else{e=a.b;f=b.b;if((e+f|0)==2){g=E(C(a.a.data[0]),F(4294967295, 0));h=E(C(b.a.data[0]),F(4294967295, 0));if(c!=d)b=A.D(c>=0?J(g,h):J(h,g));else{g=I(g,h);i=G(g);e=BP(g);b=!e?A.K(c,i):A.U(c,2,W([i,e]));}}else{if(c==d)j=e<f?A.BO(b.a,f,a.a,e):A.BO(a.a,e,b.a,f);else{i=S(e,f);i=!i?A.Ct(a.a,b.a,e):i<=0?(-1):1;if(!i){A.R();b=A.Ez;break a;}if(i!=1){j=A.BG(b.a,f,a.a,e);c=d;}else j=A.BG(a.a,e,b.a,f);}k=j.data;b=A.U(c,k.length,j);A.Be(b);}}}}return b;};
A.Bx=function(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.c;d=b.c;if(d){if(!c)a=A.Cu(b);else{e=a.b;f=b.b;if((e+f|0)==2){g=E(C(a.a.data[0]),F(4294967295, 0));h=E(C(b.a.data[0]),F(4294967295, 0));if(c<0)g=Y(g);if(d<0)h=Y(h);a=A.D(J(g,h));}else{i=S(e,f);i=!i?A.Ct(a.a,b.a,e):i<=0?(-1):1;if(i==(-1)){i= -d|0;j=c!=d?A.BO(b.a,f,a.a,e):A.BG(b.a,f,a.a,e);}else if(c!=d){j=A.BO(a.a,e,b.a,f);i=c;}else{if(!i){A.R();a=A.Ez;break a;}j=A.BG(a.a,e,b.a,f);i=c;}k=j.data;a=A.U(i,k.length,j);A.Be(a);}}}}return a;};
A.Ck=function(a,b){if(b&&a.c)return b>0?A.DQ(a,b):A.Di(a, -b|0);return a;};
A.Bu=function(a,b){if(b&&a.c)return b>0?A.Di(a,b):A.DQ(a, -b|0);return a;};
A.M=function(a,b){if(!b.c){A.R();return A.Ez;}if(!a.c){A.R();return A.Ez;}A.Ci();return A.Bw(a,b);};
A.Be=function(a){var b,c,d;while(true){b=a.b;if(b<=0)break;c=a.a.data;b=b-1|0;a.b=b;if(c[b])break;}c=a.a.data;d=a.b;a.b=d+1|0;if(!c[d])a.c=0;};
A.D9=function(){var b,c;A.Ez=A.K(0,0);A.Ey=A.K(1,1);A.EI=A.K(1,10);A.Ex=A.K((-1),1);A.EJ=Bl(A.L,[A.Ez,A.Ey,A.K(1,2),A.K(1,3),A.K(1,4),A.K(1,5),A.K(1,6),A.K(1,7),A.K(1,8),A.K(1,9),A.EI]);A.EK=V(A.L,32);b=0;while(true){c=A.EK.data;if(b>=c.length)break;c[b]=A.D(O(C(1),b));b=b+1|0;}};
A.BQ=function(){var a=this;A.A.call(a);a.bA=null;a.bI=null;};
A.DF=function(b){var c,d;if(A.BN(b))H(A.Do(b));if(!A.DG(A.Y(b,0)))H(A.Do(b));c=1;while(c<A.P(b)){a:{d=A.Y(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(A.DG(d))break a;else H(A.Do(b));}}c=c+1|0;}};
A.DG=function(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
A.BU=B(A.BQ);
A.Ew=null;A.C8=function(){var b,c,d,e,f;b=new A.BU;c=V(A.Bp,0);d=c.data;A.DF(D(16));e=d.length;f=0;while(f<e){A.DF(d[f]);f=f+1|0;}b.bA=D(16);b.bI=c.bo();A.Ew=b;};
A.DK=B();
A.Dd=B();
A.CH=function(){var a=this;A.A.call(a);a.bg=null;a.bh=0;};
A.DN=B();
A.Db=function(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.bg.data;f=b.bh;b.bh=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bi(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
A.Dj=function(b){var c,d;c=A.Db(b);d=c/2|0;if(c%2|0)d= -d|0;return d;};
A.DL=function(){A.T.call(this);this.bv=null;};
A.Do=function(a){var b=new A.DL();A.D1(b,a);return b;};
A.D1=function(a,b){A.G(a);a.bv=b;};
A.CJ=B(0);
A.B9=B(A.V);
A.BK=B(A.V);
A.N=B(A.C);
A.BL=B(A.N);
A.Bq=function(){var a=this;A.A.call(a);a.W=0;a.f=0;a.k=0;a.z=0;};
A.Cn=function(a,b){a.z=(-1);a.W=b;a.k=b;};
A.W=function(a){return a.k-a.f|0;};
A.Bd=function(a){return a.f>=a.k?0:1;};
A.CM=B(0);
A.BM=B(A.Bq);
A.B5=function(a,b){var c,d,e;if(b>=0&&b<=a.k){a.f=b;if(b<a.z)a.z=0;return a;}c=new A.T;d=a.k;e=A.O();A.Bh(A.H(A.B(A.H(A.B(e,D(17)),b),D(18)),d),93);A.F(c,A.J(e));H(c);};
A.C1=B();
A.BS=function(b,c){if(b<c)c=b;return c;};
A.Cf=function(b,c){if(b>c)c=b;return c;};
A.BR=function(){var a=this;A.Bq.call(a);a.bd=0;a.Q=null;a.bP=null;};
A.CR=function(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.bk){e=new A.CE;A.G(e);H(e);}if(A.W(a)<d){e=new A.CP;A.G(e);H(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){i=new A.N;j=A.O();A.H(A.B(A.H(A.B(j,D(19)),h),D(20)),g);A.F(i,A.J(j));H(i);}if(d<0){e=new A.N;i=A.O();A.B(A.H(A.B(i,D(21)),d),D(22));A.F(e,A.J(i));H(e);}h=a.f;k=h+a.bd|0;l=0;while(l<d){b=a.Q.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.f=h+d|0;return a;}}b=b.data;e=new A.N;d=b.length;i=A.O();A.Bh(A.H(A.B(A.H(A.B(i,D(23)),c),
D(18)),d),41);A.F(e,A.J(i));H(e);};
A.B_=function(a){a.f=0;a.k=a.W;a.z=(-1);return a;};
A.Bs=function(){A.A.call(this);this.bG=null;};
A.ED=null;A.EC=null;A.EB=null;A.C0=function(a){var b=new A.Bs();A.Dy(b,a);return b;};
A.Dy=function(a,b){a.bG=b;};
A.C5=function(){A.ED=A.C0(D(24));A.EC=A.C0(D(25));A.EB=A.C0(D(26));};
A.BF=B(A.BM);
A.Ca=function(){var a=this;A.BF.call(a);a.bE=0;a.bj=0;a.bp=null;};
A.BC=function(){var a=this;A.A.call(a);a.bM=null;a.P=null;a.bu=0.0;a.O=0.0;a.I=null;a.K=null;a.A=0;};
A.BJ=function(){var a=this;A.A.call(a);a.t=0;a.bb=0;};
A.EF=null;A.EE=null;A.C4=function(a,b){var c=new A.BJ();A.DE(c,a,b);return c;};
A.DE=function(a,b,c){a.t=b;a.bb=c;};
A.BX=function(a){return a.t!=1?0:1;};
A.DJ=function(a){return a.t!=2?0:1;};
A.CO=function(a){return a.t!=3?0:1;};
A.B2=function(b){return A.C4(2,b);};
A.C2=function(){A.EF=A.C4(0,0);A.EE=A.C4(1,0);};
A.CQ=function(){var a=this;A.BR.call(a);a.bB=0;a.bk=0;};
A.BE=function(){A.A.call(this);this.bx=null;};
A.EA=null;A.EL=null;A.DR=function(a){var b=new A.BE();A.CU(b,a);return b;};
A.CU=function(a,b){a.bx=b;};
A.DB=function(){A.EA=A.DR(D(27));A.EL=A.DR(D(28));};
A.B0=function(){var a=this;A.BC.call(a);a.bi=null;a.X=null;};
A.CS=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.bi;e=0;f=0;g=a.X;a:{b:{while(true){if((e+32|0)>f&&A.Bd(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=A.W(b)+j|0;h=i.length;f=A.BS(k,h);e=f-j|0;if(j<0)break b;if(j>=h)break b;k=j+e|0;if(k>h){l=new A.N;b=A.O();A.H(A.B(A.H(A.B(b,D(29)),k),D(20)),h);A.F(l,A.J(b));H(l);}if(A.W(b)<e)break;if(e<0){b=new A.N;c=A.O();A.B(A.H(A.B(c,D(21)),e),D(22));A.F(b,A.J(c));H(b);}h=b.f;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.bp.data[n+b.bj|0];m=m+1|
0;j=o;n=k;}b.f=h+e|0;e=0;}if(!A.Bd(c)){l=!A.Bd(b)&&e>=f?A.EF:A.EE;break a;}i=g.data;k=A.BS(A.W(c),i.length);p=new A.CL;p.bf=b;p.T=c;l=A.Dw(a,d,e,f,g,0,k,p);e=p.be;j=p.Z;if(l===null){if(!A.Bd(b)&&e>=f)l=A.EF;else if(!A.Bd(c)&&e>=f)l=A.EE;}A.CR(c,g,0,j);if(l!==null)break a;}b=new A.Cw;A.G(b);H(b);}p=new A.N;l=A.O();A.Bh(A.H(A.B(A.H(A.B(l,D(23)),j),D(18)),h),41);A.F(p,A.J(l));H(p);}A.B5(b,b.f-(f-e|0)|0);return l;};
A.CN=B(A.B0);
A.Dw=function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(A.BI(h,2))break a;i=A.EE;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!A.CI(l)&&!A.CA(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(A.BI(h,3))break a;i=A.EE;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24
>>24;}else{if(!A.CI(l)){i=A.B2(1);break a;}if(j>=d){if(A.Bd(h.bf))break a;i=A.EF;break a;}c=j+1|0;n=k[j];if(!A.CA(n)){j=c+(-2)|0;i=A.B2(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(A.BI(h,4))break a;i=A.EE;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.be=j;h.Z=f;return i;};
A.Bf=B();
A.EM=null;A.EN=null;A.EO=null;A.EP=null;A.Ci=function(){A.Ci=P(A.Bf);A.D6();};
A.Bw=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;A.Ci();if(c.b<=b.b){d=c;c=b;b=d;}e=b.b;if(e>=63){e=(c.b&(-2))<<4;d=A.Ck(c,e);f=A.Ck(b,e);g=A.Bx(c,A.Bu(d,e));h=A.Bx(b,A.Bu(f,e));i=A.Bw(d,f);j=A.Bw(g,h);b=A.Bu(A.Q(A.Q(A.Bw(A.Bx(d,g),A.Bx(h,f)),i),j),e);return A.Q(A.Q(A.Bu(i,e<<1),b),j);}k=c.b;l=k+e|0;m=c.c==b.c?1:(-1);if(l==2){n=A.Bc(c.a.data[0],b.a.data[0],0,0);e=G(n);k=BP(n);b=!k?A.K(m,e):A.U(m,2,W([e,k]));}else{o=c.a;p=b.a;q=N(l);if(k&&e){if(k==1){r=o.data;q.data[e]=A.CC(q,p,e,r[0]);}else if
(e==1){r=p.data;q.data[k]=A.CC(q,o,k,r[0]);}else if(o===p&&k==e){r=q.data;e=0;while(e<k){n=K;s=e+1|0;t=s;while(t<k){u=o.data;v=u[e];w=u[t];x=e+t|0;n=A.Bc(v,w,r[x],G(n));r[x]=G(n);n=L(n,32);t=t+1|0;}r[e+k|0]=G(n);e=s;}e=k<<1;v=0;w=0;while(w<e){s=r[w];r[w]=s<<1|v;v=s>>>31;w=w+1|0;}if(v)r[e]=v;n=K;e=0;s=0;while(e<k){u=o.data;n=A.Bc(u[e],u[e],r[s],G(n));r[s]=G(n);y=L(n,32);s=s+1|0;n=I(y,E(C(r[s]),F(4294967295, 0)));r[s]=G(n);n=L(n,32);e=e+1|0;s=s+1|0;}}else{u=q.data;s=0;while(s<k){r=o.data;n=K;t=r[s];v=0;while(v
<e){w=p.data[v];x=s+v|0;n=A.Bc(t,w,u[x],G(n));u[x]=G(n);n=L(n,32);v=v+1|0;}u[s+e|0]=G(n);s=s+1|0;}}}b=A.U(m,l,q);A.Be(b);}return b;};
A.CC=function(b,c,d,e){var f,g,h;A.Ci();f=K;g=0;while(g<d){h=b.data;f=A.Bc(c.data[g],e,G(f),0);h[g]=G(f);f=L(f,32);g=g+1|0;}return G(f);};
A.Bc=function(b,c,d,e){A.Ci();return I(I(Ba(E(C(b),F(4294967295, 0)),E(C(c),F(4294967295, 0))),E(C(d),F(4294967295, 0))),E(C(e),F(4294967295, 0)));};
A.D6=function(){var b,c,d,e;A.EM=W([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A.EN=W([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);A.EO=V(A.L,32);A.EP=V(A.L,32);b=C(1);c=0;while(c<=18){A.EP.data[c]=A.D(b);A.EO.data[c]=A.D(O(b,c));b=Ba(b,C(5));c=c+1|0;}while(c<A.EO.data.length){d=A.EP.data;e=c-1|0;d[c]=A.M(d[e],d[1]);d=A.EO.data;d[c]=A.M(d[e],A.EI);c=c+1|0;}};
A.Dh=B();
A.DP=B();
A.Ds=B();
A.Di=function(b,c){var d,e,f,g;d=c>>5;c=c&31;e=(b.b+d|0)+(c?1:0)|0;f=N(e);A.Co(f,b.a,d,c);g=A.U(b.c,e,f);A.Be(g);return g;};
A.Co=function(b,c,d,e){var f,g,h,i,j,k;a:{if(!e)A.Bt(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break a;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|i[k]>>>g;f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}};
A.DQ=function(b,c){var d,e,f,g,h,i,j,k,l,m;d=c>>5;c=c&31;e=b.b;if(d>=e){if(b.c>=0){A.R();b=A.Ez;}else{A.R();b=A.Ex;}return b;}a:{e=e-d|0;f=e+1|0;g=N(f);A.C6(g,e,b.a,d,c);h=b.c;if(h>=0)f=e;else{i=0;while(true){j=S(i,d);if(j>=0)break;if(b.a.data[i])break;i=i+1|0;}if(j>=0){if(c<=0){f=e;break a;}if(!(b.a.data[i]<<(32-c|0))){f=e;break a;}}k=g.data;l=0;while(true){i=S(l,e);if(i>=0)break;if(k[l]!=(-1))break;k[l]=0;l=l+1|0;}if(i)f=e;k[l]=k[l]+1|0;}}m=A.U(h,f,g);A.Be(m);return m;};
A.C6=function(b,c,d,e,f){var g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)A.Bt(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=i[c]>>>f|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f;}return g;};
A.CX=B();
A.Ct=function(b,c,d){var e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=Bc(E(C(b.data[e]),F(4294967295, 0)),E(C(c[e]),F(4294967295, 0)))?1:(-1);}return d;};
A.BO=function(b,c,d,e){var f,g,h,i,j;b=b.data;d=d.data;f=N(c+1|0);g=f.data;h=I(E(C(b[0]),F(4294967295, 0)),E(C(d[0]),F(4294967295, 0)));g[0]=G(h);i=M(h,32);if(c<e){j=1;while(j<c){h=I(i,I(E(C(b[j]),F(4294967295, 0)),E(C(d[j]),F(4294967295, 0))));g[j]=G(h);i=M(h,32);j=j+1|0;}while(j<e){h=I(i,E(C(d[j]),F(4294967295, 0)));g[j]=G(h);i=M(h,32);j=j+1|0;}}else{j=1;while(j<e){h=I(i,I(E(C(b[j]),F(4294967295, 0)),E(C(d[j]),F(4294967295, 0))));g[j]=G(h);i=M(h,32);j=j+1|0;}while(j<c){h=I(i,E(C(b[j]),F(4294967295, 0)));g[j]
=G(h);i=M(h,32);j=j+1|0;}}if(Bj(i,K))g[j]=G(i);return f;};
A.BG=function(b,c,d,e){var f,g,h,i,j,k,l;f=N(c);g=f.data;h=K;i=0;while(i<e){j=b.data;k=d.data;l=I(h,J(E(C(j[i]),F(4294967295, 0)),E(C(k[i]),F(4294967295, 0))));g[i]=G(l);h=M(l,32);i=i+1|0;}while(i<c){l=I(h,E(C(b.data[i]),F(4294967295, 0)));g[i]=G(l);h=M(l,32);i=i+1|0;}return f;};
A.Cd=B(A.C);
A.Dp=B();
A.Df=function(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A.EQ());}return b.data.length;};
A.BB=B(A.C);
A.BP=B(A.C);
A.B4=B(A.Bi);
A.B3=B(A.C);
A.C_=B();
A.D8=function(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;h=f.data;i=N(e+1|0);j=N(g+1|0);k=g-1|0;l=A.BZ(h[k]);if(l){A.Co(j,f,0,l);A.Co(i,d,0,l);}else{A.Bt(d,0,i,0,e);A.Bt(f,0,j,0,g);}h=i.data;d=j.data;m=d[k];n=c-1|0;o=E(C(m),F(4294967295, 0));p=g-2|0;q=C(m>>>1);k=m&1;r=O(o,1);while(n>=0){a:{if(h[e]==m)s=(-1);else{t=I(O(E(C(h[e]),F(4294967295, 0)),32),E(C(h[e-1|0]),F(4294967295, 0)));if(Bc(t,K)){u=T(t,o);v=X(t,o);}else{v=L(t,1);u=T(v,q);v=I(O(X(v,q),1),E(t,C(1)));if(k){if(U(u,v))v=J(v,u);else if
(Z(J(u,v),o)){v=I(v,J(r,u));u=J(u,C(2));}else{v=I(v,J(o,u));u=J(u,C(1));}}}v=Bg(O(v,32),E(u,F(4294967295, 0)));s=G(v);w=BP(v);if(s){x=0;s=s+1|0;while(true){s=s+(-1)|0;if(x)break;v=Ba(E(C(s),F(4294967295, 0)),E(C(d[p]),F(4294967295, 0)));u=C(w);y=I(O(u,32),E(C(h[e-2|0]),F(4294967295, 0)));u=I(E(u,F(4294967295, 0)),o);if(A.BZ(BP(u))>=32)w=G(u);else x=1;if(U(Bh(v,F(0, 2147483648)),Bh(y,F(0, 2147483648))))break a;}}}}if(s){w=e-g|0;v=K;y=K;z=0;while(z<g){t=A.Bc(d[z],s,G(v),0);x=w+z|0;v=I(J(E(C(h[x]),F(4294967295, 0)),
E(t,F(4294967295, 0))),y);h[x]=G(v);y=M(v,32);v=L(t,32);z=z+1|0;}c=w+g|0;v=I(J(E(C(h[c]),F(4294967295, 0)),v),y);h[c]=G(v);if(BP(v)){s=s+(-1)|0;y=K;ba=0;while(ba<g){z=w+ba|0;v=I(y,I(E(C(h[z]),F(4294967295, 0)),E(C(d[ba]),F(4294967295, 0))));h[z]=G(v);y=L(v,32);ba=ba+1|0;}}}if(b!==null)b.data[n]=s;e=e+(-1)|0;n=n+(-1)|0;}if(l){A.C6(j,g,i,0,l);return j;}A.Bt(i,0,j,0,g);return i;};
A.By=B(A.C);
A.CL=function(){var a=this;A.A.call(a);a.bf=null;a.T=null;a.be=0;a.Z=0;};
A.BI=function(a,b){return A.W(a.T)<b?0:1;};
A.CE=B(A.By);
A.CP=B(A.C);
A.Cw=B(A.C);
$rt_packages([]);
$rt_metadata([A.A,0,0,[],0,3,0,0,0,A.Dz,0,A.A,[],4,3,0,0,0,A.Cs,0,A.A,[],3,3,0,0,0,A.B$,0,A.A,[],3,3,0,0,0,A.Cz,0,A.A,[A.Cs,A.B$],0,3,0,0,0,A.Dv,0,A.A,[],4,0,0,0,0,A.De,0,A.A,[],4,3,0,0,0,A.Bl,0,A.A,[],3,3,0,0,0,A.S,0,A.A,[],3,3,0,0,0,A.Bv,0,A.A,[],3,3,0,0,0,A.Bp,0,A.A,[A.Bl,A.S,A.Bv],0,3,0,0,0,A.Bk,0,A.A,[],0,3,0,0,0,A.Bi,0,A.Bk,[],0,3,0,0,0,A.Br,0,A.Bi,[],0,3,0,0,0,A.CT,0,A.Br,[],0,3,0,0,0,A.Bm,0,A.A,[A.Bl],1,3,0,0,0,A.Ch,0,A.Bm,[A.S],0,3,0,0,0,A.BV,0,A.A,[A.Bl,A.Bv],0,0,0,0,0,A.B1,0,A.A,[],3,3,0,0,0,A.C7,
0,A.BV,[A.B1],0,3,0,0,0,A.Bn,0,A.Br,[],0,3,0,0,0,A.DO,0,A.Bn,[],0,3,0,0,0,A.Du,0,A.Bn,[],0,3,0,0,0,A.V,0,A.Bk,[],0,3,0,0,0,A.C,0,A.V,[],0,3,0,0,0,A.Cb,0,A.A,[],4,3,0,0,0,A.DI,0,A.A,[],0,0,0,0,0,A.DM,0,A.A,[],4,3,0,0,0,A.Ce,0,A.A,[],0,0,0,0,0,A.Cy,0,A.A,[],3,3,0,0,0,A.Cx,0,A.A,[A.Cy],3,3,0,0,0,A.Cr,0,A.A,[],3,3,0,0,0,A.Bg,0,A.A,[A.Cx,A.Cr],1,3,0,0,0,A.BT,0,A.Bg,[],0,3,0,0,0,A.CB,0,A.BT,[],0,3,0,0,0,A.BD,0,A.Bg,[],1,3,0,0,0,A.BH,0,A.BD,[],0,3,0,0,0,A.Cl,0,A.A,[],3,3,0,0,0,A.B6,0,A.A,[A.Cl],0,3,0,0,0,A.Bb,0,A.A,
[A.S],0,3,0,0,0,A.T,0,A.C,[],0,3,0,0,0,A.Z,0,A.T,[],0,3,0,0,0,A.L,0,A.Bm,[A.S,A.Bl],0,3,0,A.R,0,A.BQ,0,A.A,[A.S],1,3,0,0,0,A.BU,0,A.BQ,[],0,3,0,0,0,A.DK,0,A.A,[],4,0,0,0,0,A.Dd,0,A.A,[],4,3,0,0,0,A.CH,0,A.A,[],0,3,0,0,0,A.DN,0,A.A,[],4,3,0,0,0,A.DL,0,A.T,[],0,3,0,0,0]);
$rt_metadata([A.CJ,0,A.A,[],3,3,0,0,0,A.B9,0,A.V,[],0,3,0,0,0,A.BK,0,A.V,[],0,3,0,0,0,A.N,0,A.C,[],0,3,0,0,0,A.BL,0,A.N,[],0,3,0,0,0,A.Bq,0,A.A,[],1,3,0,0,0,A.CM,0,A.A,[],3,3,0,0,0,A.BM,0,A.Bq,[A.S,A.B1,A.Bv,A.CM],1,3,0,0,0,A.C1,0,A.A,[],4,3,0,0,0,A.BR,0,A.Bq,[A.S],1,3,0,0,0,A.Bs,0,A.A,[],0,3,0,0,0,A.BF,0,A.BM,[],1,0,0,0,0,A.Ca,0,A.BF,[],0,0,0,0,0,A.BC,0,A.A,[],1,3,0,0,0,A.BJ,0,A.A,[],0,3,0,0,0,A.CQ,0,A.BR,[],0,0,0,0,0,A.BE,0,A.A,[],4,3,0,0,0,A.B0,0,A.BC,[],1,3,0,0,0,A.CN,0,A.B0,[],0,3,0,0,0,A.Bf,0,A.A,[],0,
0,0,A.Ci,0,A.Dh,0,A.A,[],4,3,0,0,0,A.DP,0,A.A,[],0,3,0,0,0,A.Ds,0,A.A,[],0,0,0,0,0,A.CX,0,A.A,[],0,0,0,0,0,A.Cd,0,A.C,[],0,3,0,0,0,A.Dp,0,A.A,[],4,3,0,0,0,A.BB,0,A.C,[],0,3,0,0,0,A.BP,0,A.C,[],0,3,0,0,0,A.B4,0,A.Bi,[],0,3,0,0,0,A.B3,0,A.C,[],0,3,0,0,0,A.C_,0,A.A,[],0,0,0,0,0,A.By,0,A.C,[],0,3,0,0,0,A.CL,0,A.A,[],0,3,0,0,0,A.CE,0,A.By,[],0,3,0,0,0,A.CP,0,A.C,[],0,3,0,0,0,A.Cw,0,A.C,[],0,3,0,0,0]);
function $rt_array(cls,data){this.db=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","String contains digits out of radix ",": ","The value is too big for int type: ","String contains invalid digits: "," ","\t:","Time in millis: ","String is null or empty","null","Either src or dest is null","BigInteger divide by zero","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","UTF-8","New position "," is outside of range [0;",
"The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
A.Bp.prototype.toString=function(){return $rt_ustr(this);};
A.Bp.prototype.valueOf=A.Bp.prototype.toString;A.A.prototype.toString=function(){return $rt_ustr(A.DV(this));};
A.A.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y
=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi
=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>
31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo
>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi
>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)
<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,
b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive
?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a){return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo
|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===
0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>
16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi
=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|
0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -
n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=
b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)
+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge
=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,
a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var I=Long_add;var J=Long_sub;var Ba=Long_mul;var T=Long_div;var X=Long_rem;var Bg
=Long_or;var E=Long_and;var Bh=Long_xor;var O=Long_shl;var M=Long_shr;var L=Long_shru;var BQ=Long_compare;var Bf=Long_eq;var Bj=Long_ne;var Bd=Long_lt;var U=Long_le;var Z=Long_gt;var Bc=Long_ge;var BR=Long_not;var Y=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(A.Ee);
main.javaException=$rt_javaException;
})(this);
