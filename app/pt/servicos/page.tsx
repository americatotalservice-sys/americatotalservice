import { getDictionary } from '../../_lib/i18n/getDictionary';
import ServicesPage from '../../components/ServicesPage';

export default async function Page() {
  const dict = await getDictionary('pt');
  return <ServicesPage dict={dict} />;
}
