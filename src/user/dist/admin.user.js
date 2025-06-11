"use strict";
exports.__esModule = true;
exports.userAdmin = void 0;
var AdminJS = (await Promise.resolve().then(function () { return require('adminjs'); }))["default"];
var AdminJSExpress = (await Promise.resolve().then(function () { return require('@adminjs/express'); }))["default"];
var AdminJSPrisma = await Promise.resolve().then(function () { return require('@adminjs/prisma'); });
var Database = AdminJSPrisma.Database, Resource = AdminJSPrisma.Resource;
AdminJS.registerAdapter({ Database: Database, Resource: Resource });
var prisma = new PrismaClient();
exports.userAdmin = new AdminJS({
    rootPath: '/admin/user',
    resources: [
        {
            resource: { model: prisma.user, client: prisma },
            options: {
                properties: {
                    password: { isVisible: false }
                }
            }
        },
    ],
    branding: {
        companyName: 'User Panel',
        logo: false,
        softwareBrothers: false,
        theme: {
            colors: {
                primary100: '#0066ff',
                primary80: '#3399ff'
            }
        }
    }
});
