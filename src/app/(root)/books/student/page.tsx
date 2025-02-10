import React from 'react'
import dynamic from 'next/dynamic'
import mockPromise from '../_core/lib/utils/mockPromise';

const StudentView = dynamic(()=>import('../_core/components/View/StudentView').then(mod=>mod.default))
const StudentPage = async () => {
    await mockPromise(1000)
  return (
    <StudentView/>
  )
}

export default StudentPage