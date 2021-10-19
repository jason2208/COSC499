import express from 'express';
import tagController from './tag-controller';

const tagRouter = express.Router({ mergeParams: true });

tagRouter.route('/').get(tagController.getTagList);

export default tagRouter;
