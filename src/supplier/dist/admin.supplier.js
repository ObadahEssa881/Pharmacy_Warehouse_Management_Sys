"use strict";
exports.__esModule = true;
exports.supplierAdmin = void 0;
var AdminJS = (await Promise.resolve().then(function () { return require('adminjs'); }))["default"];
var AdminJSExpress = (await Promise.resolve().then(function () { return require('@adminjs/express'); }))["default"];
var AdminJSPrisma = await Promise.resolve().then(function () { return require('@adminjs/prisma'); });
var Database = AdminJSPrisma.Database, Resource = AdminJSPrisma.Resource;
AdminJS.registerAdapter({ Database: Database, Resource: Resource });
var prisma = new PrismaClient();
exports.supplierAdmin = new AdminJS({
    rootPath: '/admin/supplier',
    resources: [
        {
            resource: { model: prisma.supplier, client: prisma },
            options: {
                properties: {
                    password: { isVisible: false }
                }
            }
        },
    ],
    branding: {
        companyName: 'Supplier Panel',
        logo: false,
        softwareBrothers: false,
        theme: {
            colors: {
                primary100: '#ff6600',
                primary80: '#ff9933'
            }
        }
    }
});
