<script type="text/javascript" id="jquery-core-js-extra">
        /* <![CDATA[ */
        var elm_button_vars = { "wrapper": "#blog_list,#portfolio_list,#case_studies_list" };
        /* ]]> */
    </script>
     type="rocketlazyloadscript" data-rocket-type="text/javascript">window.addEventListener('DOMContentLoaded', function() {

        jQuery(document).ready(function($){
            var pageName = 'IT Staff Augmentation Services';
            
        jQuery('#req_reffers_pfm').val(window.location.href);
        jQuery('#popup_form_message').val(pageName);
        
        
        // goal submission
        jQuery('#reffer_goal_submission').val(window.location.href);
        jQuery('#reffer_goal_submission1').val(window.location.href);
        
        var ids = ['#req_reffers_fm', '#req_reffers_fm1', '#req_reffers_fm2', '#req_reffers_fm3'];
        
        // Iterate over each ID and check/set value
        ids.forEach(function(id) {
          var $element = $(id);
          if ($element.length > 0) { // Check if the element exists
            var value = $element.val();
            if (value === null || (typeof value === 'string' && value.trim() === '')) {
              $element.val('theninehertz.com');
            }
          }
        });
            });
        
        
            jQuery.fn.extend({
          renameAttr: function( name, newName, removeData ) {
            var val;
            return this.each(function() {
              val = jQuery.attr( this, name );
              jQuery.attr( this, newName, val );
              jQuery.removeAttr( this, name );
              // remove original data
              if (removeData !== false){
                jQuery.removeData( this, name.replace('data-','') );
              }
            });
          }
        });
        
        jQuery('a[data-toggle="modal"]').each(function() {
            //alert()
          var $t = jQuery(this);
          $t.renameAttr('data-toggle', 'data-bs-toggle',false);
          $t.renameAttr('data-target', 'data-bs-target',false );
           
        });
        jQuery('a[data-bs-target="#blogBoxModal"]').click(function() {
                //var type = 'page';
                var slug = 'it-staff-augmentation-services';
                
                // if(type =="post"){
                //   var type = 'blog';
                  var qtr = 'q='+slug.replace('blog-','');;
                // }else{
          //         var qtr = 'q='+slug;
                // }
                // alert('/contact-us?t='+type+'&'+qtr);
                // return false;
                window.open(
          'https://theninehertz.com/contact-us?'+qtr,
          '_blank' // <- This is what makes it open in a new window.
        );
                window.open(
          'https://theninehertz.com/contact-us/',
          '_blank' // <- This is what makes it open in a new window.
        );
            return false;
            });
        
            jQuery('a[data-toggle="collapse"]').each(function() {
            //alert()
          var $t = $(this);
          $t.renameAttr('data-toggle', 'data-bs-toggle',false);
          $t.renameAttr('data-parent', 'data-bs-parent',false );
           
        });
        jQuery(window).on('load', function() {
            setTimeout(function () {
                jQuery('#exampleModalAdd').modal('show');
        },15000);
        });
        });</>
             type="rocketlazyloadscript" defer data-rocket-type="text/javascript">window.addEventListener('DOMContentLoaded', function() {
            document.addEventListener( 'wpcf7mailsent', function( event ) {
                
                        // if('57703' == event.detail.contactFormId ){
                //     $('#exampleModalAdd .row.formrequest').hide();
                //     $('#exampleModalAdd .ty-bg').show();
                //     gtag('event','click', { 'event_category':"blogpopup", 'event_label':"popup" });
                //     setTimeout(function() { $("#exampleModalAdd").modal('hide'); }, 3000);
        
                // } else
                 if ('54911' != event.detail.contactFormId || '57703' != event.detail.contactFormId) {
                                location = 'https://theninehertz.com/thank-you?q=it-staff-augmentation-services';
                        }
            }, false );
        
        
        });</>
                 type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
                //File upload Drag and drop
                var $fileInput = jQuery('.file-input');
                var $droparea = jQuery('.file-drop-area');
        
                // highlight drag area
                $fileInput.on('dragenter focus click', function() {
                  $droparea.addClass('is-active');
                });
        
                // back to normal state
                $fileInput.on('dragleave blur drop', function() {
                  $droparea.removeClass('is-active');
                });
        
                // change inner text
                $fileInput.on('change', function() {
                  var filesCount = jQuery(this)[0].files.length;
                  var $textContainer = jQuery(this).parent().prev();
        
                  if (filesCount === 1) {
                    // if single file is selected, show file name
                    var fileName = jQuery(this).val().split('\\').pop();
                    $textContainer.text(fileName);
                  } else {
                    // otherwise show number of files
                    $textContainer.text(filesCount + ' files selected');
                  }
                });
            });</>
        
            
        
                 type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/plugins/makestories-helper/vendor/slick/slick.min.js?ver=8bc7d671e063725c5d94f810a8a07cee"
                    id="slick-min-js-js" defer></>
                type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/cache/min/1/wp-content/plugins/makestories-helper/assets/js/ms-script.js?ver=1725536655"
                    id="script-main-js" defer></type=>
               type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/cache/min/1/player/StoryPlayer.js?ver=1725536656"
                    id="ms-story-player-js" defer></script>
                type="text/javascript" id="ez-toc-scroll-scriptjs-js-extra">
                    /* <![CDATA[ */
                    var eztoc_smooth_local = { "scroll_offset": "30", "add_request_uri": "" };
                    /* ]]> */
                
               type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/plugins/easy-table-of-contents/assets/js/smooth_scroll.min.js?ver=2.0.69"
                    id="ez-toc-scroll-scriptjs-js" defer></script>
              type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/plugins/easy-table-of-contents/vendor/js-cookie/js.cookie.min.js?ver=2.2.1"
                    id="ez-toc-js-cookie-js" defer></script>
                t type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/plugins/easy-table-of-contents/vendor/sticky-kit/jquery.sticky-kit.min.js?ver=1.9.2"
                    id="ez-toc-jquery-sticky-kit-js" defer></script>
                type="text/javascript" id="ez-toc-js-js-extra">
                    /* <![CDATA[ */
                    var ezTOC = { "smooth_scroll": "1", "visibility_hide_by_default": "", "scroll_offset": "30", "fallbackIcon": "<span class=\"\"><span class=\"eztoc-hide\" style=\"display:none;\">Toggle<\/span><span class=\"ez-toc-icon-toggle-span\"><svg style=\"fill: #999;color:#999\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" class=\"list-377408\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z\" fill=\"currentColor\"><\/path><\/svg><svg style=\"fill: #999;color:#999\" class=\"arrow-unsorted-368013\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"10px\" height=\"10px\" viewBox=\"0 0 24 24\" version=\"1.2\" baseProfile=\"tiny\"><path d=\"M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z\"\/><\/svg><\/span><\/span>", "chamomile_theme_is_on": "" };
                    /* ]]> */
                </script>
               type="text/javascript"
                    src="https://theninehertz.com/wp-content/plugins/easy-table-of-contents/assets/js/front.min.js?ver=2.0.69-1724839554"
                    id="ez-toc-js-js" defer></script>
                type="rocketlazyloadscript" data-rocket-type="text/javascript" id="rocket-browser-checker-js-after">
        /* <![CDATA[ */
        "use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
        /* ]]> */
        </script>
                 type="text/javascript" id="rocket-preload-links-js-extra">
                    /* <![CDATA[ */
                    var RocketPreloadLinksConfig = { "excludeUris": "\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index.php\/)?(.*)wp-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/", "usesTrailingSlash": "", "imageExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php", "fileExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm", "siteUrl": "https:\/\/theninehertz.com", "onHoverDelay": "100", "rateThrottle": "3" };
                    /* ]]> */
                </script>
               type="rocketlazyloadscript" data-rocket-type="text/javascript" id="rocket-preload-links-js-after">
        /* <![CDATA[ */
        (function() {
        "use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
        }());
        /* ]]> */
        </script>
            type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://www.google.com/recaptcha/api.js?render=6LdwdMQpAAAAAA6LtHJm4M0WFMyCERug8vHhZDyl&amp;ver=3.0"
                    id="google-recaptcha-js"></script>
               type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
                    id="wp-polyfill-js"></script>
              type="text/javascript" id="wpcf7-recaptcha-js-extra">
                    /* <![CDATA[ */
                    var wpcf7_recaptcha = { "sitekey": "6LdwdMQpAAAAAA6LtHJm4M0WFMyCERug8vHhZDyl", "actions": { "homepage": "homepage", "contactform": "contactform" } };
                    /* ]]> */
                </script>
              type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/cache/min/1/wp-content/plugins/contact-form-7/modules/recaptcha/index.js?ver=1725536656"
                    id="wpcf7-recaptcha-js" defer></script>
               type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-includes/js/dist/hooks.min.js?ver=2810c76e705dd1a53b18"
                    id="wp-hooks-js"></script>
              type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6"
                    id="wp-i18n-js"></script>
               type="rocketlazyloadscript" data-rocket-type="text/javascript" id="wp-i18n-js-after">
        /* <![CDATA[ */
        wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
        /* ]]> */
        
               type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/cache/min/1/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=1725536656"
                    id="swv-js" defer></script>
         type="text/javascript" id="contact-form-7-js-extra">
                    /* <![CDATA[ */
                    var wpcf7 = { "api": { "root": "https:\/\/theninehertz.com\/wp-json\/", "namespace": "contact-form-7\/v1" }, "cached": "1" };
                    /* ]]> */
                </script>
             type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/cache/min/1/wp-content/plugins/contact-form-7/includes/js/index.js?ver=1725536656"
                    id="contact-form-7-js" defer></script>
              type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/js/jquery.min.js"
                    id="jqueryMin-2022-js-js" defer></script>
            type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/js/bootstrap.min.js"
                    id="bootstrap-2022-js-js" defer></script>
                 type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/js/owl.carousel.min.js"
                    id="owl-2022-js-js" defer></script>
          type="rocketlazyloadscript" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/themes/ninehertz/assets/js/intlTelInput-jquery.min.js"
                    id="intlTelInput-2022-js-js" defer></script>
                 type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
                    data-rocket-src="https://theninehertz.com/wp-content/cache/min/1/wp-content/themes/ninehertz/assets-2022/js/custom.js?ver=1725536658"
                    id="custom-2022-js-js" defer></>
            
                /(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
            
                window.lazyLoadOptions = [{ elements_selector: "img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]", data_src: "lazy-src", data_srcset: "lazy-srcset", data_sizes: "lazy-sizes", class_loading: "lazyloading", class_loaded: "lazyloaded", threshold: 300, callback_loaded: function (element) { if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") { if (element.classList.contains("lazyloaded")) { if (typeof window.jQuery != "undefined") { if (jQuery.fn.fitVids) { jQuery(element).parent().fitVids() } } } } } }, { elements_selector: ".rocket-lazyload", data_src: "lazy-src", data_srcset: "lazy-srcset", data_sizes: "lazy-sizes", class_loading: "lazyloading", class_loaded: "lazyloaded", threshold: 300, }]; window.addEventListener('LazyLoad::Initialized', function (e) {
                        var lazyLoadInstance = e.detail.instance; if (window.MutationObserver) {
                            var observer = new MutationObserver(function (mutations) {
                                var image_count = 0; var iframe_count = 0; var rocketlazy_count = 0; mutations.forEach(function (mutation) {
                                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                                        if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') { continue }
                                        if (typeof mutation.addedNodes[i].getElementsByClassName !== 'function') { continue }
                                        images = mutation.addedNodes[i].getElementsByTagName('img'); is_image = mutation.addedNodes[i].tagName == "IMG"; iframes = mutation.addedNodes[i].getElementsByTagName('iframe'); is_iframe = mutation.addedNodes[i].tagName == "IFRAME"; rocket_lazy = mutation.addedNodes[i].getElementsByClassName('rocket-lazyload'); image_count += images.length; iframe_count += iframes.length; rocketlazy_count += rocket_lazy.length; if (is_image) { image_count += 1 }
                                        if (is_iframe) { iframe_count += 1 }
                                    }
                                }); if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) { lazyLoadInstance.update() }
                            }); var b = document.getElementsByTagName("body")[0]; var config = { childList: !0, subtree: !0 }; observer.observe(b, config)
                        }
                    }, !1)