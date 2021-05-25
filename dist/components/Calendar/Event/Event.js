"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Event_styled_1 = require("./Event.styled");
const Event = (props) => {
    return (React.createElement(Event_styled_1.StyledEvent, null,
        React.createElement(Event_styled_1.StyledEventLink, null,
            React.createElement(Event_styled_1.StyledEventContent, null,
                React.createElement(Event_styled_1.StyledColorTag, { style: props.color ? { backgroundColor: props.color } : undefined }),
                React.createElement(Event_styled_1.StyledEventBody, null,
                    React.createElement("span", null, props.title),
                    React.createElement("span", null, props.body))))));
};
exports.default = Event;
//# sourceMappingURL=Event.js.map