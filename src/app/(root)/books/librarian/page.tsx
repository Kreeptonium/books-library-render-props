import dynamic from 'next/dynamic'
import mockPromise from '../_core/lib/utils/mockPromise'


const LibrarianView = dynamic(
  () => import('../_core/components/View/LibrarianView').then(mod => mod.default)
)

const LibrarianPage = async () => {
  await mockPromise(1000);
  return <LibrarianView />
}

export default LibrarianPage