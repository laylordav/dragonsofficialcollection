import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Products.module.css'
import Productcard from '@/components/Productcard'

const products = () => {
  return (
    <Layout>
      <input type="text" />
      <div className={styles.product_container}>
        <Productcard title="Producto 1" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 2" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 3" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 4" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 5" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 6" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 7" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 8" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 9" short_description="Lorem ipsum dolor set aimet." />
        <Productcard title="Producto 10" short_description="Lorem ipsum dolor set aimet." />



      </div>
    </Layout>
  )
}

export default products