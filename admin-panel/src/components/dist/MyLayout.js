"use strict";
exports.__esModule = true;
exports.ProAdminLayout = void 0;
// src/components/ProAdminLayout.tsx
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_admin_1 = require("react-admin");
var pro_components_1 = require("@ant-design/pro-components");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var themeTokens = {
    borderRadiusLG: 12,
    colorBgContainer: 'rgba(255,255,255,0.75)',
    colorPrimary: '#1677ff',
    boxShadowTertiary: '0 4px 24px rgba(0,0,0,.1)',
    wireframe: false
};
exports.ProAdminLayout = function (_a) {
    var children = _a.children;
    var logout = react_admin_1.useLogout();
    var navigate = react_router_dom_1.useNavigate();
    var location = react_router_dom_1.useLocation();
    var resources = react_admin_1.useResourceDefinitions();
    var menuData = react_1.useMemo(function () {
        return Object.keys(resources).map(function (name) {
            var _a, _b, _c;
            return ({
                path: "/" + name,
                name: (_b = (_a = resources[name].options) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : name.replace(/-/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); }),
                icon: (_c = resources[name].icon) !== null && _c !== void 0 ? _c : React.createElement(icons_1.UserOutlined, null)
            });
        });
    }, [resources]);
    var userMenu = {
        items: [
            {
                key: 'logout',
                icon: React.createElement(icons_1.LogoutOutlined, null),
                label: 'Logout',
                onClick: function () { return logout(); }
            },
        ]
    };
    return (React.createElement(antd_1.ConfigProvider, { theme: {
            token: themeTokens
        } },
        React.createElement(pro_components_1.ProLayout, { title: "PharmaSys", logo: "/logo.svg", location: location, route: { routes: menuData }, menuItemRender: function (item, dom) { return (React.createElement("div", { onClick: function () { return navigate(item.path || '/'); } }, dom)); }, avatarProps: {
                icon: React.createElement(antd_1.Avatar, { style: { backgroundColor: '#1677ff' }, icon: React.createElement(icons_1.UserOutlined, null) }),
                render: function (props, dom) { return React.createElement(antd_1.Dropdown, { menu: userMenu }, dom); }
            }, headerRender: function (props, defaultDom) { return (React.createElement("div", { style: {
                    backdropFilter: 'blur(6px)',
                    background: 'rgba(255,255,255,0.6)',
                    boxShadow: themeTokens.boxShadowTertiary
                } }, defaultDom)); }, token: {
                sider: {
                    colorBgMenuItemSelected: themeTokens.colorPrimary
                },
                pageContainer: {
                    paddingBlockPageContainerContent: 24,
                    paddingInlinePageContainerContent: 24
                }
            } },
            React.createElement(pro_components_1.PageContainer, { breadcrumb: undefined },
                React.createElement("div", { style: { minHeight: 'calc(100vh - 200px)' } }, children)))));
};
