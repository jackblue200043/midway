"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},l="Timer trigger (timed task)",o={unversionedId:"serverless/tencent_trigger_timer",id:"serverless/tencent_trigger_timer",title:"Timer trigger (timed task)",description:"A timed task trigger is used to periodically execute a function. Tencent Cloud Timer Trigger currently only supports cron format.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/tencent_trigger_timer.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_timer",permalink:"/en/docs/serverless/tencent_trigger_timer",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/tencent_trigger_timer.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Timer configuration",id:"timer-configuration",level:2},{value:"Event structure",id:"event-structure",level:2},{value:"Local development",id:"local-development",level:2},{value:"Local test",id:"local-test",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timer-trigger-timed-task"},"Timer trigger (timed task)"),(0,a.kt)("p",null,"A timed task trigger is used to periodically execute a function. Tencent Cloud Timer Trigger currently only supports cron format."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Warm reminder, please close the trigger in time after testing the function and execute it automatically to avoid over-deduction.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context, SCF } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.TIMER, {\n    type: 'cron',\n    value: '*/60 * * * * * *', // trigger every 60s\n  })\n  async handleTimerEvent(event: SCF.TimerEvent) {\n    this.ctx.logger.info(event);\n    return 'hello world';\n  }\n}\n")),(0,a.kt)("p",null,"Note that Tencent Cloud is set to full Cron. For more information about the Cron format, see ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/583/9708"},"Development documentation"),"."),(0,a.kt)("p",null,"Common format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*/5 * * * * * indicates that it is triggered every 5 seconds.\n0 0 2 1 * * * indicates that it is triggered at 2: 00 a.m. on the 1st of each month.\n0 15 10 * * MON-FRI * means it will be triggered at 10:15 a.m. every day from Monday to Friday.\n0 0 10,14,16 * * * * means to trigger at 10: 00 a.m., 2: 00 p.m. and 4: 00 p.m. every day\n0 */30 9-17 * * * * means every half hour from 9: 00 a.m. to 5: 00 p.m.\n0 0 12 * * WED * means to trigger at 12 noon every Wednesday\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy"),"."),(0,a.kt)("h2",{id:"timer-configuration"},"Timer configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"cron"),(0,a.kt)("td",{parentName:"tr",align:null},"Required, trigger type, representing cron expression.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required, cron expression or every value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payload"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional, a fixed passed value, rarely used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"cron expression")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(ServerlessTriggerType.TIMER, {\n  type: 'cron',\n  value: '0 0 4 * * *', //triggered at 4:00 every day\n})\n")),(0,a.kt)("h2",{id:"event-structure"},"Event structure"),(0,a.kt)("p",null,"The structure returned by the Timer message is as follows and is described in the ",(0,a.kt)("inlineCode",{parentName:"p"},"SCF.TimerEvent")," type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  Message: '',\n  Time: new Date().toJSON()\n  TriggerName: 'test',\n  Type: 'Timer',\n}\n")),(0,a.kt)("h2",{id:"local-development"},"Local development"),(0,a.kt)("p",null,"You cannot use dev to develop events locally. You can only run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," command to run tests."),(0,a.kt)("h2",{id:"local-test"},"Local test"),(0,a.kt)("p",null,"Unlike HTTP testing, the function app is created by ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp"),", and the instance of the entire class is obtained by ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance"),", thus calling a specific method to test."),(0,a.kt)("p",null,"You can quickly create the structure passed in by the platform by ",(0,a.kt)("inlineCode",{parentName:"p"},"createTimerEvent")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloTencentService } from '../src/function/hello_tencent';\nimport { createTimerEvent } from '@midwayjs/serverless-scf-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n    instance = await app.getServerlessInstance<HelloTencentService>(HelloTencentService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from timer trigger', async () => {\n    expect(await instance.handleTimerEvent(createTimerEvent())).toEqual('hello world');\n  });\n});\n")))}m.isMDXComponent=!0}}]);