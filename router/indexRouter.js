const Router = require('express');
const router = new Router();
const roleMiddleware = require('../middlewares/roleMiddleware');
const indexController = require('../controller/indexController');

router.post('/good',roleMiddleware(['ADMIN']) ,indexController.create);
router.get('/good', indexController.getAll);
router.get('/good/:id', indexController.getOne);
router.put('/good',roleMiddleware(['ADMIN'])  ,indexController.update);
router.delete('/good/:id',roleMiddleware(['ADMIN']),indexController.delete);

router.post('/good/category',roleMiddleware(['ADMIN']),indexController.createCategory);
router.post('/good/type',roleMiddleware(['ADMIN'])  ,indexController.createType);
router.delete('/good/category/:id',roleMiddleware(['ADMIN'])  ,indexController.deleteCategory);
router.delete('/good/type/:id',roleMiddleware(['ADMIN']),indexController.deleteType);

module.exports = router;