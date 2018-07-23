(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-component-library', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['my-component-library'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HeaderComponent = (function () {
        function HeaderComponent() {
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-header',
                        template: "\n  <h1>\n  <ng-content></ng-content>\n</h1>\n  ",
                        styles: ["\n  h1 {\n    color: red;\n  }\n  "]
                    },] },
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return []; };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HeaderModule = (function () {
        function HeaderModule() {
        }
        HeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [HeaderComponent],
                        exports: [
                            HeaderComponent
                        ],
                    },] },
        ];
        return HeaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.HeaderModule = HeaderModule;
    exports.ɵa = HeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1jb21wb25lbnQtbGlicmFyeS9zcmMvYXBwL21vZHVsZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovL215LWNvbXBvbmVudC1saWJyYXJ5L3NyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGgxPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2gxPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gIGgxIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSGVhZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEhlYWRlckNvbXBvbmVudCBcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFpQkU7U0FBaUI7Ozs7UUFFakIsa0NBQVE7OztZQUFSO2FBQ0M7O29CQWxCRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsa0RBSVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsb0NBSVIsQ0FBQztxQkFDSDs7Ozs4QkFkRDs7Ozs7OztBQ0FBOzs7O29CQUlDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQy9CLE9BQU8sRUFBRTs0QkFDUCxlQUFlO3lCQUNoQjtxQkFDRjs7MkJBWkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==