"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
const react_1 = __importDefault(require("react"));
const Calendar_1 = __importDefault(require("../src/components/Calendar"));
describe('<Calendar />', () => {
    it('Should render properly', () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Calendar_1.default, { defaultDate: new Date(2019, 4, 8) }));
        expect(wrapper.text()).toContain('May 2019');
    });
});
//# sourceMappingURL=Calendar.spec.js.map