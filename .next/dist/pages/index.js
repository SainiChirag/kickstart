'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Chirag Saini\\Desktop\\dev\\kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',

        /*async componentDidMount(){
            const campaigns = await factory.methods.getDepolyedCampaigns().call(); //typo in spelling of deployed
            console.log(campaigns);
        }*/ // cannot be used by nextjs (nextjs uses getInitialprops) 

        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, 'View Capmpaign'),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, { content: 'Create Campaign',
                icon: 'add circle',
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDepolyedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBvbHllZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOzs7Ozs7O0lBRVQsQTs7Ozs7Ozs7OzthQU1GOzs7OztZQUdJOzswQ0FFYSxBQUNiO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQzlDOzs0QkFBTSxBQUNLLEFBQ1A7aURBQVksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHFCQUFBLEVBRlYsQUFFVSxBQUNaOzJCQUhKLEFBQU0sQUFHSyxBQUVkO0FBTFMsQUFDRjtBQUZSLEFBQWMsQUFPZCxhQVBjO2lEQU9QLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBcUI7OEJBQXJCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBRUgsQUFFSjs7bUNBQU8sY0FBQTs7OEJBQUE7Z0NBQUEsQUFDUDtBQURPO0FBQUEsYUFBQSwwQ0FDRCxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qjs4QkFBNUI7Z0NBRE8sQUFDUCxBQUNDO0FBREQ7cUJBRE8sQUFFTixBQUFLLEFBQ04sbUNBQUEsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLEFBQ2hCO3NCQURBLEFBQ0ssQUFDTDt5QkFGQTs4QkFBQTtnQ0FIQSxBQUFPLEFBR1AsQUFJSDtBQUpHOzs7Ozs7Ozs7Ozs7O3VDQXZCd0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUF1QixBLEFBQXZDOztpQ0FBbEI7QTtpRUFDQyxFQUFDLFcsQUFBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUphLEEsQUFpQzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0NoaXJhZyBTYWluaS9EZXNrdG9wL2Rldi9raWNrc3RhcnQifQ==