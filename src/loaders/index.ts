import dependencyInjectorLoader from './dependencyInjector';
import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async ({ expressApp }: any) => {
  console.group('Loading application.');
  const mongoConnection = await mongooseLoader();
  console.log('DB loaded and connected.');

  const estateModel = {
    name: 'estateModel',
    // Notice the require syntax and the '.default'
    model: require('../models/estates').default,
  };
  await dependencyInjectorLoader({
    mongoConnection,
    models: [estateModel],
  });
  console.log('Dependency Injector loaded.');

  await expressLoader({ app: expressApp });
  console.log('Express loaded.');
  console.groupEnd();
};
