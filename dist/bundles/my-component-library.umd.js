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
                        templateUrl: './header.component.html',
                        styleUrls: ['./header.component.css']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1jb21wb25lbnQtbGlicmFyeS9zcmMvYXBwL21vZHVsZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovL215LWNvbXBvbmVudC1saWJyYXJ5L3NyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtIZWFkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50IFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNFO1NBQWlCOzs7O1FBRWpCLGtDQUFROzs7WUFBUjthQUNDOztvQkFWRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUseUJBQXlCO3dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztxQkFDdEM7Ozs7OEJBTkQ7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUMvQixPQUFPLEVBQUU7NEJBQ1AsZUFBZTt5QkFDaEI7cUJBQ0Y7OzJCQVpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=