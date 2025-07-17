import ServicesPage from '@/pages/ServicesPage'
import React from 'react'
import { servicesData } from '../../../../public/assets/js/servicesdata'

export async function generateStaticParams() {
  return Object.keys(servicesData).map((title) => ({
    title: title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

const page = ({ params }) => {
  const { title } = params;
  return (
    <><ServicesPage title={title} /></>
  )
}

export default page

