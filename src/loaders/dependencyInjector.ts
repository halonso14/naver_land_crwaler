import { Container } from 'typedi';
import agendaFactory from './agenda';

export default ({ mongoConnection, models }: { mongoConnection: any; models: { name: string; model: any }[] }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    const agendaInstance = agendaFactory({ mongoConnection });
    Container.set('agendaInstance', agendaInstance);
    console.log('Agenda injected into container.');

    return { agenda: agendaInstance };
  } catch (e) {
    console.error(`Error on dependency injector loader: ${JSON.stringify(e)}`);
    throw e;
  }
};
