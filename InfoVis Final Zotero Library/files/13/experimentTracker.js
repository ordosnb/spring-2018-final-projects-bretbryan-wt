!function(){function e(e){console.log({event:"experiment-tracker-error",error:e.message})}function i(e,i){var t=i||{};t.event=e,c.push(t)}function t(e,i){return!(!e||!i||e.experimentId!=i)}function r(e,i){if(e&&e.length&&i)for(var t=0;t<e.length;t++)if(String(e[t])===String(i))return!0;return!1}function n(e,i){return{experimentId:i.experimentId,version:e,name:i.name,variation:i.variation,active:i.active||i.redirect,state:i.active||i.redirect?"active":"inactive",redirect:i.redirect}}function a(e,t){newExperiment={optimizely_version:e,optimizely_key:t.experimentId,optimizely_experiment:t.name,optimizely_variation:t.variation,optimizely_variation_state:t.state,optimizely_variation_active:t.active,optimizely_experiment_type:t.redirect?"redirect":"normal"},i("optimizely_bucket",newExperiment)}function o(e){var i,o,m,c,l={},s={},d=e&&e.data&&e.data.state;c=d.variationNamesMap,o=d.activeExperiments,redirectExperiments=d.redirectExperiment,i=e.data.experiments||[];for(m in i)p.call(i,m)&&(s.experimentId=m,s.name=i[m].name,s.variation=c[m],s.active=r(o,m),s.redirect=t(d.redirectExperiment,m),l[m]=n("Optimizely Classic",s),(s.active||s.redirect)&&a("Optimizely Classic",l[m]));return l}function m(i){try{i.get("data")}catch(i){return void e({message:"Optimizely X not active"})}var o,m,c={},l={};optimizelyVersion="Optimizely X",m=i.get("state").getVariationMap(),o=i.get("state").getActiveExperimentIds(),allXExperiments=i.get("data").experiments||[],redirectInfo=i.get("state").getRedirectInfo();for(var s in allXExperiments)p.call(allXExperiments,s)&&(l.experimentId=s,l.name=allXExperiments[s].name,l.variation=m[s]?m[s].name:void 0,l.active=r(o,s),l.redirect=t(redirectInfo,s),c[s]=n(optimizelyVersion,l),(l.active||l.redirect)&&a(optimizelyVersion,c[s]));return c}var c=window.dataLayer||[],p=Object.prototype.hasOwnProperty,l={};console.log("Experiment Tracker Version Number:  2.2"),window._apExperiment=function(t,r){if("true"===t.optimizelyClassic)try{l.optimizely_classic=o(r)}catch(i){e({message:"Optimizely Classic error"})}if("true"===t.optimizelyX)try{l.optimizely_x=m(r)}catch(i){e({message:"Optimizely X error"})}l.optimizely_classic||l.optimizelyX?i("optimizely_loaded",l):e({message:"No Optimizely Tests Found"})}}();
