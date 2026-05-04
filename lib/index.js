var _excluded = [
  'children',
  'flexDirection',
  'width',
  'isFocused',
  'showIndex',
  'colors',
];
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++)
      (o = n[r]),
        -1 === t.indexOf(o) &&
          {}.propertyIsEnumerable.call(e, o) &&
          (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
  return t;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
import React from 'react';
import readline from 'readline';
import { Box, Text, useStdin } from 'ink';

/**
 * Represent props of a <Tab>
 */

/**
 * A <Tab> component
 */
// eslint-disable-next-line react/prop-types
export var Tab = function Tab(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/ React.createElement(React.Fragment, null, children);
};

/**
 * Declare how does the keyboard interacts with ink-tab here
 */

/**
 * Props for the <Tabs> component
 */
var TabsWithStdin = /*#__PURE__*/ (function (_React$Component) {
  function TabsWithStdin(props) {
    var _this;
    _classCallCheck(this, TabsWithStdin);
    _this = _callSuper(this, TabsWithStdin, [props]);
    // eslint-disable-next-line react/sort-comp
    _defineProperty(_this, 'defaultKeyMap', void 0);
    _this.handleTabChange = _this.handleTabChange.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.moveToNextTab = _this.moveToNextTab.bind(_this);
    _this.moveToPreviousTab = _this.moveToPreviousTab.bind(_this);
    _this.state = {
      activeTab: 0,
    };
    _this.defaultKeyMap = {
      useNumbers: true,
      useTab: true,
      previous: [_this.isColumn() ? 'up' : 'left'],
      next: [_this.isColumn() ? 'down' : 'right'],
    };
    return _this;
  }
  _inherits(TabsWithStdin, _React$Component);
  return _createClass(TabsWithStdin, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props = this.props,
          stdin = _this$props.stdin,
          setRawMode = _this$props.setRawMode,
          isRawModeSupported = _this$props.isRawModeSupported,
          children = _this$props.children,
          defaultValue = _this$props.defaultValue;
        if (isRawModeSupported) {
          // use ink / node `setRawMode` to read key-by-key
          setRawMode(true);
          readline.emitKeypressEvents(stdin);
          stdin.on('keypress', this.handleKeyPress);
        }

        // select defaultValue if it's valid otherwise select the first tab on component mount
        var initialTabIndex = 0;
        if (typeof defaultValue !== 'undefined') {
          var foundIndex = children.findIndex(function (child) {
            return child.props.name === defaultValue;
          });
          if (foundIndex > 0) {
            initialTabIndex = foundIndex;
          }
        }
        this.handleTabChange(initialTabIndex);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this$props2 = this.props,
          stdin = _this$props2.stdin,
          setRawMode = _this$props2.setRawMode,
          isRawModeSupported = _this$props2.isRawModeSupported;
        if (isRawModeSupported) {
          setRawMode(false); // remove set raw mode, as it might interfere with CTRL-C
          stdin.removeListener('keypress', this.handleKeyPress);
        }
      },
    },
    {
      key: 'handleTabChange',
      value: function handleTabChange(tabId) {
        var _this$props3 = this.props,
          children = _this$props3.children,
          onChange = _this$props3.onChange;
        var tab = children[tabId];

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions -- handle possible runtime errors
        if (!tab) {
          return;
        }
        this.setState({
          activeTab: tabId,
        });
        onChange(tab.props.name, tab);
      },
    },
    {
      key: 'handleKeyPress',
      value: function handleKeyPress(ch, key) {
        var _this$props4 = this.props,
          keyMap = _this$props4.keyMap,
          isFocused = _this$props4.isFocused;
        if (key == null || isFocused === false) {
          return;
        }
        var currentKeyMap = _objectSpread(
          _objectSpread({}, this.defaultKeyMap),
          keyMap
        );
        var useNumbers = currentKeyMap.useNumbers,
          useTab = currentKeyMap.useTab,
          previous = currentKeyMap.previous,
          next = currentKeyMap.next;
        if (
          previous.some(function (keyName) {
            return keyName === key.name;
          })
        ) {
          this.moveToPreviousTab();
        }
        if (
          next.some(function (keyName) {
            return keyName === key.name;
          })
        ) {
          this.moveToNextTab();
        }
        switch (key.name) {
          case 'tab': {
            if (!useTab || isFocused !== null) {
              // if isFocused != null, then the focus is managed by ink and thus we can not use this key
              return;
            }
            if (key.shift) {
              this.moveToPreviousTab();
            } else {
              this.moveToNextTab();
            }
            break;
          }
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9': {
            if (!useNumbers) {
              return;
            }
            if (key.meta) {
              var tabId = key.name === '0' ? 9 : parseInt(key.name, 10) - 1;
              this.handleTabChange(tabId);
            }
            break;
          }
          default:
            break;
        }
      },
    },
    {
      key: 'isColumn',
      value: function isColumn() {
        var flexDirection = this.props.flexDirection;
        return flexDirection === 'column' || flexDirection === 'column-reverse';
      },
    },
    {
      key: 'moveToNextTab',
      value: function moveToNextTab() {
        var children = this.props.children;
        var activeTab = this.state.activeTab;
        var nextTabId = activeTab + 1;
        if (nextTabId >= children.length) {
          nextTabId = 0;
        }
        this.handleTabChange(nextTabId);
      },
    },
    {
      key: 'moveToPreviousTab',
      value: function moveToPreviousTab() {
        var children = this.props.children;
        var activeTab = this.state.activeTab;
        var nextTabId = activeTab - 1;
        if (nextTabId < 0) {
          nextTabId = children.length - 1;
        }
        this.handleTabChange(nextTabId);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$props5 = this.props,
          children = _this$props5.children,
          flexDirection = _this$props5.flexDirection,
          width = _this$props5.width,
          isFocused = _this$props5.isFocused,
          showIndex = _this$props5.showIndex,
          colorsProp = _this$props5.colors,
          rest = _objectWithoutProperties(_this$props5, _excluded);
        var activeTab = this.state.activeTab;
        var separatorWidth = width !== null && width !== void 0 ? width : 6;
        var separator = this.isColumn()
          ? new Array(separatorWidth).fill('─').join('')
          : ' | ';
        return /*#__PURE__*/ React.createElement(
          Box,
          _extends(
            {
              flexDirection: flexDirection,
              width: width,
            },
            rest
          ),
          children.map(function (child, key) {
            var name = child.props.name;
            var colors = {};
            if (isFocused !== false) {
              var _colorsProp$activeTab,
                _colorsProp$activeTab2,
                _colorsProp$activeTab3,
                _colorsProp$activeTab4;
              colors = {
                backgroundColor:
                  activeTab === key
                    ? (_colorsProp$activeTab =
                        colorsProp === null ||
                        colorsProp === void 0 ||
                        (_colorsProp$activeTab2 = colorsProp.activeTab) ===
                          null ||
                        _colorsProp$activeTab2 === void 0
                          ? void 0
                          : _colorsProp$activeTab2.color) !== null &&
                      _colorsProp$activeTab !== void 0
                      ? _colorsProp$activeTab
                      : 'green'
                    : undefined,
                color:
                  activeTab === key
                    ? (_colorsProp$activeTab3 =
                        colorsProp === null ||
                        colorsProp === void 0 ||
                        (_colorsProp$activeTab4 = colorsProp.activeTab) ===
                          null ||
                        _colorsProp$activeTab4 === void 0
                          ? void 0
                          : _colorsProp$activeTab4.backgroundColor) !== null &&
                      _colorsProp$activeTab3 !== void 0
                      ? _colorsProp$activeTab3
                      : 'black'
                    : undefined,
              };
            } else {
              colors = {
                backgroundColor: activeTab === key ? 'gray' : undefined,
                color: activeTab === key ? 'black' : undefined,
              };
            }
            return /*#__PURE__*/ React.createElement(
              Box,
              {
                key: name,
                flexDirection: flexDirection,
              },
              key !== 0 &&
                /*#__PURE__*/ React.createElement(
                  Text,
                  {
                    color: 'dim',
                  },
                  separator
                ),
              /*#__PURE__*/ React.createElement(
                Box,
                null,
                showIndex === true &&
                  /*#__PURE__*/ React.createElement(
                    Text,
                    {
                      color: 'grey',
                    },
                    key + 1,
                    '. '
                  ),
                /*#__PURE__*/ React.createElement(Text, colors, child)
              )
            );
          })
        );
      },
    },
  ]);
})(React.Component);
/**
 * The <Tabs> component
 */
_defineProperty(TabsWithStdin, 'defaultProps', {
  flexDirection: 'row',
  keyMap: null,
  isFocused: null,
  // isFocused is null mean that the focus not handle by ink
  defaultValue: null,
  showIndex: true,
});
export var Tabs = function Tabs(props) {
  var _useStdin = useStdin(),
    isRawModeSupported = _useStdin.isRawModeSupported,
    stdin = _useStdin.stdin,
    setRawMode = _useStdin.setRawMode;
  return /*#__PURE__*/ React.createElement(
    TabsWithStdin,
    _extends(
      {
        isRawModeSupported: isRawModeSupported,
        stdin: stdin,
        setRawMode: setRawMode,
      },
      props
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlYWRsaW5lIiwiQm94IiwiVGV4dCIsInVzZVN0ZGluIiwiVGFiIiwiX3JlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiVGFic1dpdGhTdGRpbiIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZVRhYkNoYW5nZSIsImJpbmQiLCJoYW5kbGVLZXlQcmVzcyIsIm1vdmVUb05leHRUYWIiLCJtb3ZlVG9QcmV2aW91c1RhYiIsInN0YXRlIiwiYWN0aXZlVGFiIiwiZGVmYXVsdEtleU1hcCIsInVzZU51bWJlcnMiLCJ1c2VUYWIiLCJwcmV2aW91cyIsImlzQ29sdW1uIiwibmV4dCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpcyRwcm9wcyIsInN0ZGluIiwic2V0UmF3TW9kZSIsImlzUmF3TW9kZVN1cHBvcnRlZCIsImRlZmF1bHRWYWx1ZSIsImVtaXRLZXlwcmVzc0V2ZW50cyIsIm9uIiwiaW5pdGlhbFRhYkluZGV4IiwiZm91bmRJbmRleCIsImZpbmRJbmRleCIsImNoaWxkIiwibmFtZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX3RoaXMkcHJvcHMyIiwicmVtb3ZlTGlzdGVuZXIiLCJ0YWJJZCIsIl90aGlzJHByb3BzMyIsIm9uQ2hhbmdlIiwidGFiIiwic2V0U3RhdGUiLCJjaCIsIl90aGlzJHByb3BzNCIsImtleU1hcCIsImlzRm9jdXNlZCIsImN1cnJlbnRLZXlNYXAiLCJfb2JqZWN0U3ByZWFkIiwic29tZSIsImtleU5hbWUiLCJzaGlmdCIsIm1ldGEiLCJwYXJzZUludCIsImZsZXhEaXJlY3Rpb24iLCJuZXh0VGFiSWQiLCJsZW5ndGgiLCJyZW5kZXIiLCJfdGhpcyRwcm9wczUiLCJ3aWR0aCIsInNob3dJbmRleCIsImNvbG9yc1Byb3AiLCJjb2xvcnMiLCJyZXN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwic2VwYXJhdG9yV2lkdGgiLCJzZXBhcmF0b3IiLCJBcnJheSIsImZpbGwiLCJqb2luIiwiX2V4dGVuZHMiLCJtYXAiLCJfY29sb3JzUHJvcCRhY3RpdmVUYWIiLCJfY29sb3JzUHJvcCRhY3RpdmVUYWIyIiwiX2NvbG9yc1Byb3AkYWN0aXZlVGFiMyIsIl9jb2xvcnNQcm9wJGFjdGl2ZVRhYjQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCIsIlRhYnMiLCJfdXNlU3RkaW4iXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCByZWFkbGluZSBmcm9tICdyZWFkbGluZSc7XHJcbmltcG9ydCB7IEJveCwgdHlwZSBTdGRpblByb3BzLCB0eXBlIEJveFByb3BzLCBUZXh0LCB1c2VTdGRpbiB9IGZyb20gJ2luayc7XHJcblxyXG50eXBlIEV4dHJhY3RGQ1Byb3BzPFQ+ID0gVCBleHRlbmRzIFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PGluZmVyIFA+ID8gUCA6IG5ldmVyO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudCBwcm9wcyBvZiBhIDxUYWI+XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRhYlByb3BzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgPFRhYj4gY29tcG9uZW50XHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG5leHBvcnQgY29uc3QgVGFiOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxUYWJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPD57Y2hpbGRyZW59PC8+XHJcbik7XHJcblxyXG4vKipcclxuICogRGVjbGFyZSBob3cgZG9lcyB0aGUga2V5Ym9hcmQgaW50ZXJhY3RzIHdpdGggaW5rLXRhYiBoZXJlXHJcbiAqL1xyXG5pbnRlcmZhY2UgS2V5TWFwUHJvcHMge1xyXG4gIHVzZU51bWJlcnM/OiBib29sZWFuO1xyXG4gIHVzZVRhYj86IGJvb2xlYW47XHJcbiAgcHJldmlvdXM/OiBzdHJpbmdbXTtcclxuICBuZXh0Pzogc3RyaW5nW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1aXJlZEtleU1hcFByb3BzIHtcclxuICB1c2VOdW1iZXJzOiBib29sZWFuO1xyXG4gIHVzZVRhYjogYm9vbGVhbjtcclxuICBwcmV2aW91czogc3RyaW5nW107XHJcbiAgbmV4dDogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9wcyBmb3IgdGhlIDxUYWJzPiBjb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFic1Byb3BzIHtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuZXZlciBhIHRhYiBpcyBjaGFuZ2luZy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdGFiIHBhc3NlZCBpbiB0aGUgYG5hbWVgIHByb3BcclxuICAgKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudDxUYWJQcm9wcz59IGFjdGl2ZVRhYiB0aGUgY3VycmVudCBhY3RpdmUgdGFiIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uQ2hhbmdlOiAobmFtZTogc3RyaW5nLCBhY3RpdmVUYWI6IFJlYWN0LlJlYWN0RWxlbWVudDx0eXBlb2YgVGFiPikgPT4gdm9pZDtcclxuICBjaGlsZHJlbjogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PHR5cGVvZiBUYWI+PjtcclxuICBmbGV4RGlyZWN0aW9uPzogQm94UHJvcHNbJ2ZsZXhEaXJlY3Rpb24nXTtcclxuICB3aWR0aD86IEJveFByb3BzWyd3aWR0aCddO1xyXG4gIGtleU1hcD86IEtleU1hcFByb3BzO1xyXG4gIGlzRm9jdXNlZD86IGJvb2xlYW47XHJcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xyXG4gIHNob3dJbmRleD86IGJvb2xlYW47XHJcbiAgY29sb3JzPzoge1xyXG4gICAgYWN0aXZlVGFiPzoge1xyXG4gICAgICBjb2xvcj86IEV4dHJhY3RGQ1Byb3BzPHR5cGVvZiBUZXh0PlsnY29sb3InXTtcclxuICAgICAgYmFja2dyb3VuZENvbG9yPzogRXh0cmFjdEZDUHJvcHM8dHlwZW9mIFRleHQ+WydiYWNrZ3JvdW5kQ29sb3InXTtcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5pbnRlcmZhY2UgVGFic1dpdGhTdGRpblByb3BzIGV4dGVuZHMgVGFic1Byb3BzIHtcclxuICBpc1Jhd01vZGVTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcbiAgc2V0UmF3TW9kZTogU3RkaW5Qcm9wc1snc2V0UmF3TW9kZSddO1xyXG4gIHN0ZGluOiBTdGRpblByb3BzWydzdGRpbiddO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGFic1dpdGhTdGRpblN0YXRlIHtcclxuICBhY3RpdmVUYWI6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVGFic1dpdGhTdGRpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBUYWJzV2l0aFN0ZGluUHJvcHMsXHJcbiAgVGFic1dpdGhTdGRpblN0YXRlXHJcbj4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9zb3J0LWNvbXBcclxuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRLZXlNYXA6IFJlcXVpcmVkS2V5TWFwUHJvcHM7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICBrZXlNYXA6IG51bGwsXHJcbiAgICBpc0ZvY3VzZWQ6IG51bGwsIC8vIGlzRm9jdXNlZCBpcyBudWxsIG1lYW4gdGhhdCB0aGUgZm9jdXMgbm90IGhhbmRsZSBieSBpbmtcclxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgIHNob3dJbmRleDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVGFic1dpdGhTdGRpblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUYWJDaGFuZ2UgPSB0aGlzLmhhbmRsZVRhYkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVLZXlQcmVzcyA9IHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubW92ZVRvTmV4dFRhYiA9IHRoaXMubW92ZVRvTmV4dFRhYi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5tb3ZlVG9QcmV2aW91c1RhYiA9IHRoaXMubW92ZVRvUHJldmlvdXNUYWIuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY3RpdmVUYWI6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVmYXVsdEtleU1hcCA9IHtcclxuICAgICAgdXNlTnVtYmVyczogdHJ1ZSxcclxuICAgICAgdXNlVGFiOiB0cnVlLFxyXG4gICAgICBwcmV2aW91czogW3RoaXMuaXNDb2x1bW4oKSA/ICd1cCcgOiAnbGVmdCddLFxyXG4gICAgICBuZXh0OiBbdGhpcy5pc0NvbHVtbigpID8gJ2Rvd24nIDogJ3JpZ2h0J10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHN0ZGluLCBzZXRSYXdNb2RlLCBpc1Jhd01vZGVTdXBwb3J0ZWQsIGNoaWxkcmVuLCBkZWZhdWx0VmFsdWUgfSA9XHJcbiAgICAgIHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKGlzUmF3TW9kZVN1cHBvcnRlZCkge1xyXG4gICAgICAvLyB1c2UgaW5rIC8gbm9kZSBgc2V0UmF3TW9kZWAgdG8gcmVhZCBrZXktYnkta2V5XHJcbiAgICAgIHNldFJhd01vZGUodHJ1ZSk7XHJcblxyXG4gICAgICByZWFkbGluZS5lbWl0S2V5cHJlc3NFdmVudHMoc3RkaW4pO1xyXG4gICAgICBzdGRpbi5vbigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgZGVmYXVsdFZhbHVlIGlmIGl0J3MgdmFsaWQgb3RoZXJ3aXNlIHNlbGVjdCB0aGUgZmlyc3QgdGFiIG9uIGNvbXBvbmVudCBtb3VudFxyXG4gICAgbGV0IGluaXRpYWxUYWJJbmRleCA9IDA7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kSW5kZXggPSBjaGlsZHJlbi5maW5kSW5kZXgoXHJcbiAgICAgICAgKGNoaWxkKSA9PiBjaGlsZC5wcm9wcy5uYW1lID09PSBkZWZhdWx0VmFsdWVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChmb3VuZEluZGV4ID4gMCkge1xyXG4gICAgICAgIGluaXRpYWxUYWJJbmRleCA9IGZvdW5kSW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZVRhYkNoYW5nZShpbml0aWFsVGFiSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHN0ZGluLCBzZXRSYXdNb2RlLCBpc1Jhd01vZGVTdXBwb3J0ZWQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKGlzUmF3TW9kZVN1cHBvcnRlZCkge1xyXG4gICAgICBzZXRSYXdNb2RlKGZhbHNlKTsgLy8gcmVtb3ZlIHNldCByYXcgbW9kZSwgYXMgaXQgbWlnaHQgaW50ZXJmZXJlIHdpdGggQ1RSTC1DXHJcbiAgICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5UHJlc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVGFiQ2hhbmdlKHRhYklkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IHRhYiA9IGNoaWxkcmVuW3RhYklkXTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3N0cmljdC1ib29sZWFuLWV4cHJlc3Npb25zIC0tIGhhbmRsZSBwb3NzaWJsZSBydW50aW1lIGVycm9yc1xyXG4gICAgaWYgKCF0YWIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3RpdmVUYWI6IHRhYklkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgb25DaGFuZ2UodGFiLnByb3BzLm5hbWUsIHRhYik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlQcmVzcyhcclxuICAgIGNoOiBzdHJpbmcsXHJcbiAgICBrZXk6IG51bGwgfCB7IG5hbWU6IHN0cmluZzsgc2hpZnQ6IGJvb2xlYW47IG1ldGE6IGJvb2xlYW4gfVxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBrZXlNYXAsIGlzRm9jdXNlZCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBpZiAoa2V5ID09IG51bGwgfHwgaXNGb2N1c2VkID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudEtleU1hcCA9IHsgLi4udGhpcy5kZWZhdWx0S2V5TWFwLCAuLi5rZXlNYXAgfTtcclxuICAgIGNvbnN0IHsgdXNlTnVtYmVycywgdXNlVGFiLCBwcmV2aW91cywgbmV4dCB9ID0gY3VycmVudEtleU1hcDtcclxuXHJcbiAgICBpZiAocHJldmlvdXMuc29tZSgoa2V5TmFtZSkgPT4ga2V5TmFtZSA9PT0ga2V5Lm5hbWUpKSB7XHJcbiAgICAgIHRoaXMubW92ZVRvUHJldmlvdXNUYWIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV4dC5zb21lKChrZXlOYW1lKSA9PiBrZXlOYW1lID09PSBrZXkubmFtZSkpIHtcclxuICAgICAgdGhpcy5tb3ZlVG9OZXh0VGFiKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChrZXkubmFtZSkge1xyXG4gICAgICBjYXNlICd0YWInOiB7XHJcbiAgICAgICAgaWYgKCF1c2VUYWIgfHwgaXNGb2N1c2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBpZiBpc0ZvY3VzZWQgIT0gbnVsbCwgdGhlbiB0aGUgZm9jdXMgaXMgbWFuYWdlZCBieSBpbmsgYW5kIHRodXMgd2UgY2FuIG5vdCB1c2UgdGhpcyBrZXlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChrZXkuc2hpZnQpIHtcclxuICAgICAgICAgIHRoaXMubW92ZVRvUHJldmlvdXNUYWIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tb3ZlVG9OZXh0VGFiKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSAnMCc6XHJcbiAgICAgIGNhc2UgJzEnOlxyXG4gICAgICBjYXNlICcyJzpcclxuICAgICAgY2FzZSAnMyc6XHJcbiAgICAgIGNhc2UgJzQnOlxyXG4gICAgICBjYXNlICc1JzpcclxuICAgICAgY2FzZSAnNic6XHJcbiAgICAgIGNhc2UgJzcnOlxyXG4gICAgICBjYXNlICc4JzpcclxuICAgICAgY2FzZSAnOSc6IHtcclxuICAgICAgICBpZiAoIXVzZU51bWJlcnMpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleS5tZXRhKSB7XHJcbiAgICAgICAgICBjb25zdCB0YWJJZCA9IGtleS5uYW1lID09PSAnMCcgPyA5IDogcGFyc2VJbnQoa2V5Lm5hbWUsIDEwKSAtIDE7XHJcblxyXG4gICAgICAgICAgdGhpcy5oYW5kbGVUYWJDaGFuZ2UodGFiSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0NvbHVtbigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHsgZmxleERpcmVjdGlvbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbicgfHwgZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbi1yZXZlcnNlJztcclxuICB9XHJcblxyXG4gIG1vdmVUb05leHRUYWIoKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBhY3RpdmVUYWIgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgbGV0IG5leHRUYWJJZCA9IGFjdGl2ZVRhYiArIDE7XHJcbiAgICBpZiAobmV4dFRhYklkID49IGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICBuZXh0VGFiSWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlVGFiQ2hhbmdlKG5leHRUYWJJZCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9QcmV2aW91c1RhYigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGFjdGl2ZVRhYiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgbmV4dFRhYklkID0gYWN0aXZlVGFiIC0gMTtcclxuICAgIGlmIChuZXh0VGFiSWQgPCAwKSB7XHJcbiAgICAgIG5leHRUYWJJZCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVUYWJDaGFuZ2UobmV4dFRhYklkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgZmxleERpcmVjdGlvbixcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGlzRm9jdXNlZCxcclxuICAgICAgc2hvd0luZGV4LFxyXG4gICAgICBjb2xvcnM6IGNvbG9yc1Byb3AsXHJcbiAgICAgIC4uLnJlc3RcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBhY3RpdmVUYWIgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3Qgc2VwYXJhdG9yV2lkdGggPSB3aWR0aCA/PyA2O1xyXG5cclxuICAgIGNvbnN0IHNlcGFyYXRvciA9IHRoaXMuaXNDb2x1bW4oKVxyXG4gICAgICA/IG5ldyBBcnJheShzZXBhcmF0b3JXaWR0aCkuZmlsbCgn4pSAJykuam9pbignJylcclxuICAgICAgOiAnIHwgJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249e2ZsZXhEaXJlY3Rpb259IHdpZHRoPXt3aWR0aH0gey4uLnJlc3R9PlxyXG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKGNoaWxkLCBrZXkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gY2hpbGQucHJvcHM7XHJcbiAgICAgICAgICBsZXQgY29sb3JzID0ge307XHJcbiAgICAgICAgICBpZiAoaXNGb2N1c2VkICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb2xvcnMgPSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSBrZXlcclxuICAgICAgICAgICAgICAgICAgPyBjb2xvcnNQcm9wPy5hY3RpdmVUYWI/LmNvbG9yID8/ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgY29sb3I6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09IGtleVxyXG4gICAgICAgICAgICAgICAgICA/IGNvbG9yc1Byb3A/LmFjdGl2ZVRhYj8uYmFja2dyb3VuZENvbG9yID8/ICdibGFjaydcclxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvcnMgPSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVUYWIgPT09IGtleSA/ICdncmF5JyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlVGFiID09PSBrZXkgPyAnYmxhY2snIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCb3gga2V5PXtuYW1lfSBmbGV4RGlyZWN0aW9uPXtmbGV4RGlyZWN0aW9ufT5cclxuICAgICAgICAgICAgICB7a2V5ICE9PSAwICYmIDxUZXh0IGNvbG9yPVwiZGltXCI+e3NlcGFyYXRvcn08L1RleHQ+fVxyXG4gICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luZGV4ID09PSB0cnVlICYmIDxUZXh0IGNvbG9yPVwiZ3JleVwiPntrZXkgKyAxfS4gPC9UZXh0Pn1cclxuICAgICAgICAgICAgICAgIDxUZXh0IHsuLi5jb2xvcnN9PntjaGlsZH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSA8VGFicz4gY29tcG9uZW50XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFiczogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8VGFic1Byb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXNSYXdNb2RlU3VwcG9ydGVkLCBzdGRpbiwgc2V0UmF3TW9kZSB9ID0gdXNlU3RkaW4oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJzV2l0aFN0ZGluXHJcbiAgICAgIGlzUmF3TW9kZVN1cHBvcnRlZD17aXNSYXdNb2RlU3VwcG9ydGVkfVxyXG4gICAgICBzdGRpbj17c3RkaW59XHJcbiAgICAgIHNldFJhd01vZGU9e3NldFJhd01vZGV9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQUssTUFBTSxPQUFPO0FBQ3pCLE9BQU9DLFFBQVEsTUFBTSxVQUFVO0FBQy9CLFNBQVNDLEdBQUcsRUFBa0NDLElBQUksRUFBRUMsUUFBUSxRQUFRLEtBQUs7O0FBSXpFO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBTUMsR0FBc0MsR0FBRyxTQUF6Q0EsR0FBc0NBLENBQUFDLElBQUE7RUFBQSxJQUFNQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUFBLG9CQUMvRFAsS0FBQSxDQUFBUSxhQUFBLENBQUFSLEtBQUEsQ0FBQVMsUUFBQSxRQUFHRixRQUFXLENBQUM7QUFBQSxDQUNoQjs7QUFFRDtBQUNBO0FBQ0E7O0FBZUE7QUFDQTtBQUNBO0FBRkEsSUFrQ01HLGFBQWEsMEJBQUFDLGdCQUFBO0VBZWpCLFNBQUFELGNBQVlFLEtBQXlCLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosYUFBQTtJQUNyQ0csS0FBQSxHQUFBRSxVQUFBLE9BQUFMLGFBQUEsR0FBTUUsS0FBSztJQVpiO0lBQUFJLGVBQUEsQ0FBQUgsS0FBQTtJQWNFQSxLQUFBLENBQUtJLGVBQWUsR0FBR0osS0FBQSxDQUFLSSxlQUFlLENBQUNDLElBQUksQ0FBQUwsS0FBSyxDQUFDO0lBQ3RE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
