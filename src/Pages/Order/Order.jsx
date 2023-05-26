/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import cover1 from './../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseHooks from '../../UseHooks/UseHooks';
import FoodCard from '../../Components/FoodCard/FoodCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ["Salad", "pizza", "soups", "desserts", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    console.log(category)
    const [menu] = UseHooks()
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const offered = menu.filter((item) => item.category === "offered");
    const drinks = menu.filter((item) => item.category === "drinks");
    return (
      <div className="mb-20">
        <Helmet>
            <title>
                ORDER
            </title>
        </Helmet>
        <Cover menuImg={cover1} title="Order Food"></Cover>
        <div className="mt-20 text-center">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <section className="text-xl font-semibold">
              <TabList>
                <Tab>Salad</Tab>
                <Tab>pizza</Tab>
                <Tab>soups</Tab>
                <Tab>desserts</Tab>
                <Tab>drinks</Tab>
              </TabList>
            </section>

            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>

            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default Order;
