"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// ??p d???ng react component
// code trong public/scripts/app.js l?? code ???? ???????c babel convert

/*
  - Ch???y live-server v?? babel locally: ch???y c??u l???nh: npm run ... trong "scripts" c???a package.json

  -JS thao t??c v?? truy xu???t d??? li???u tr??n JSX th??ng qua ReactDOM v?? hi???n tr??n browser
  -React Component(t??? ?????nh ngh??a) lu??n c?? ch??? c??i ?????u vi???t hoa, VD: <Header/>, ???????c t???o ra 
  b???i ES6-classes v?? c?? th??? reuse
  - Prop React component: key-value. -> C??ch access: this.props.nameOfKey (quy t???c this gi???ng trong Object)
  - t???ng child trong array trong JSX ph???i c?? 1 prop t??n l?? "key"

  - React Component State: b???n ch???t l?? 1 Object v???i key-value. "D??ng React Component State":
  + kh???i t???o gi?? tr??? default
  + React Component state render gi?? tr??? kh???i t???o ????
  + Thay ?????i gi?? tr??? kh???i t???o
  + React Component State s??? t??? ?????ng render l???i gi?? tr???
  + l???p l???i b?????c 3 n???u thay ?????i ti???p

  + N??n t???o h??m thay ?????i data tr??n parent RC ???? r???i chuy???n l???i cho child RC ????? child th???c hi???n b???i 
  kh??ng th??? thay ?????i data c???a props tr??n c??c h??m c???a child RC m?? props ???? ???????c kh???i t???o trong parent RC
  -> child RC ???? d??ng c??c h??m ???? ????? "communicate" v???i parent RC ????? thay ?????i v?? truy xu???t data
  
  -So s??nh props v?? state
  Gi???ng nhau: ?????u l?? Object, ?????u ???????c s??? d???ng ????? rendering, ?????u c?? th??? change cause re-rendering (v???i state l?? nh??? setState() v?? v???i
  props l?? ???????c thay ?????i t??? parent r???i chuy???n xu???ng cho child)
  ??i???m kh??c:+ Mu???n thay ?????i data c???a props th?? ph???i thay ?????i t??? tr??n (t???c l?? parent) r???i chuy???n xu???ng cho child d?????i d???ng props,
            + Props kh??ng th??? thay ?????i trong component(ngo???i tr??? ph???n render() nh??ng th???c ch???t l?? data trong props v???n kh??ng thay ?????i), 
            ng?????c l???i data trong state c?? th??? thay ?????i trong Component c???a ch??nh n?? nh??? setState() 
            + state th?? ???????c ?????nh ngh??a trong Component c???a ch??nh n??, c?? th??? ch???a props data cho c??c child n???u nh?? c??c props ???? c?? th??? thay ?????i
  

  -STATELESS FUNCTIONAL COMPONENT: gi???ng react Component based Class nh??ng n?? kh??ng s??? d???ng ???????c "State" tuy nhi??n v???n c?? th??? truy xu???t v?? s??? 
  d???ng props nh?? l?? agrument ?????u ti??n c???a 1 h??m
  ??u ??i???m: ?????i v???i c??c RC based Class ch??? c?? 1 h??m render() -> chuy???n sang stateless functional component s??? nhanh v?? g???n h??n
  -Default Props: setup ???????c cho c??? RC based Class v?? Stateless functional Component, syntax: RC.defaultProps = {}
  -Lifecycle methods: ch??? ??p d???ng cho RC based Class, ???????c k??ch ho???t t???i nhi???u th???i ??i???m kh??c nhau c???a RC v?? ???????c k??ch ho???t 
  behind the sence, b???n th??n render() c??ng l?? m???t lifecycle methods, c??c methods n??y c?? 2 agru: preProps, preState

  -??n l???i localStorage v?? JSON: localStorage l??u tr??? data gi??? nh???ng l???n page "refresh", JSON- string presentation c???a Object,Array trong JS, m???t lo???i
  format l??u Object v?? array c???a JS d?????i d???ng String

  
*/
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.state = {
      options: props.options // default props ch??? c?? ngh??a khi ??? trong constructor?

    };
    _this.handlerRemoveAllOptions = _this.handlerRemoveAllOptions.bind(_assertThisInitialized(_this));
    _this.handlerPickRandom = _this.handlerPickRandom.bind(_assertThisInitialized(_this));
    _this.handlerAddOption = _this.handlerAddOption.bind(_assertThisInitialized(_this));
    _this.handlerRemoveIndividualOption = _this.handlerRemoveIndividualOption.bind(_assertThisInitialized(_this));
    return _this;
  } //v?? d??? v??? 2 lifecycle method ??i???n h??nh


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // ???????c k??ch ho???t sau khi render xong
      try {
        // ????? tr??nh ngo???i d??? li???u trong localStorage c?? th??? kh??ng parse ???????c
        var json = localStorage.getItem("options"); // get data

        var options = JSON.parse(json);

        if (options) {
          // n???u options kh??ng ph???i l?? null
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (error) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // ???????c k??ch ho???t khi data c???a Component thay ?????i(state ho???c props b??? thay ?????i)
      if (this.state.options.length !== prevState.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json); // set data
      }
    }
  }, {
    key: "handlerRemoveAllOptions",
    value: function handlerRemoveAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlerRemoveIndividualOption",
    value: function handlerRemoveIndividualOption(option) {
      this.setState(function (preState) {
        return {
          options: preState.options.filter(function (o) {
            return o !== option;
          })
        };
      });
    }
  }, {
    key: "handlerPickRandom",
    value: function handlerPickRandom() {
      var randomPick = Math.floor(Math.random() * this.state.options.length);
      var optionPicked = this.state.options[randomPick];
      alert(optionPicked);
    }
  }, {
    key: "handlerAddOption",
    value: function handlerAddOption(option) {
      if (!option) {
        return "Error: Please enter valid text";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Error: This option has already exists";
      }

      this.setState(function (preState) {
        return {
          options: preState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Put your life in your hand! Destiny";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0 ? false : true,
        pickRandom: this.handlerPickRandom
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        removeAllOptions: this.handlerRemoveAllOptions,
        handlerRemoveIndividualOption: this.handlerRemoveIndividualOption
      }), /*#__PURE__*/React.createElement(AddOptions, {
        handlerAddOption: this.handlerAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ["One", "Two", "Three", "Four"] //options: []

}; // stateless functional component
// RC nh??ng ch??? c?? 1 h??m render() n??n switch sang stateless functional component

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subtitle && /*#__PURE__*/React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: "Indecision App"
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: props.hasOptions,
    onClick: props.pickRandom
  }, "What should I do"));
};

var Options = /*#__PURE__*/function (_React$Component2) {
  _inherits(Options, _React$Component2);

  var _super2 = _createSuper(Options);

  function Options() {
    _classCallCheck(this, Options);

    return _super2.apply(this, arguments);
  }

  _createClass(Options, [{
    key: "render",
    value: // constructor(props) {
    //   super(props);
    //  this.handlerRemoveAll = this.handlerRemoveAll.bind(this); // bind "this" keyword trong h??m handlerRemoveAll v???i this mong mu???n ??? ????y l?? Class
    // }
    function render() {
      var _this2 = this;

      // onClick s??? c?? context gi???ng h??m handlerRemoveAll, tuy nhi??n this l??c n??y ???? kh??ng c??n tr???
      // class n???a m?? n?? kh??ng tr??? g?? c??? (null) hay m???t "This" v?? l?? props c???a eventHandler(trong eventHandler this tr??? null)
      // s??? d???ng bind(this) -> m?? this trong render l?? tr??? class -> bind "this" n??y v???i "this" trong h??m c???a eventHandler
      //onClick={this.handlerRemoveAll.bind(this)} tuy nhi??n c??ch n??y khi???n ta ph???i code l???i li??n t???c n???u mu???n s??? d???ng h??m n??y
      // thay v??o ???? ta "bind" ngay tr??n constructor. B??y gi??? h??m handlerRemoveAll() ???? b??? b???
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.removeAllOptions
      }, "Remove All Options"), /*#__PURE__*/React.createElement("br", null), this.props.options.length === 0 && /*#__PURE__*/React.createElement("p", null, "Please enter some text"), this.props.options.length, this.props.options.map(function (o) {
        return /*#__PURE__*/React.createElement(Option, {
          key: o,
          optionText: o,
          handlerRemoveIndividualOption: _this2.props.handlerRemoveIndividualOption
        });
      }));
    }
  }]);

  return Options;
}(React.Component); // Mu???n truy???n h??m c?? para v??o eventHandler -> t???o m???t arrow function cho eventHandler ???? r???i g???i h??m v???i para


var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, props.optionText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.handlerRemoveIndividualOption(props.optionText);
    }
  }, "Remove"));
};

var AddOptions = /*#__PURE__*/function (_React$Component3) {
  _inherits(AddOptions, _React$Component3);

  var _super3 = _createSuper(AddOptions);

  function AddOptions(props) {
    var _this3;

    _classCallCheck(this, AddOptions);

    _this3 = _super3.call(this, props);
    _this3.handlerAddOptions = _this3.handlerAddOptions.bind(_assertThisInitialized(_this3));
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOptions, [{
    key: "handlerAddOptions",
    value: function handlerAddOptions(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim(); //form.elements.nameOfElement(input).value

      e.target.elements.option.value = "";
      var error = this.props.handlerAddOption(option);
      console.log(error);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handlerAddOptions
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOptions;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById("app-id")); // RC nh??ng ch??? c?? 1 h??m render() n??n switch sang stateless functional component
// class Header extends React.Component {
//   // required method khi l?? subclass c???a React.Component
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={this.props.hasOptions}
//           onClick={this.props.pickRandom}
//         >
//           What should I do
//         </button>
//       </div>
//     );
//   }
// }
// class Option extends React.Component {
//   render() {
//     return <li>{this.props.optionText}</li>;
//   }
// }
