"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const profissionalRoutes_1 = __importDefault(require("./routes/profissionalRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3333;
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(profissionalRoutes_1.default);
app.get('/', (req, res) => {
    res.status(200).send('<h1>Está Online</h1>');
});
app.use((error, request, response, next) => {
    response.json({
        status: "error",
        message: error.message
    });
    next();
});
app.listen(port, () => {
    console.log(`Aplicação online na porta ${port}`);
});
