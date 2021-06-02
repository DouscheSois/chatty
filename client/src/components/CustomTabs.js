import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import BitcoinChat from "./chats/BitcoinChat";
import EthereumChat from "./chats/EthereumChat";
import CardanoChat from "./chats/CardanoChat";
import DogeChat from "./chats/DogeChat";

const CustomTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Bitcoin</Tab>
        <Tab>Ethereum</Tab>
        <Tab>Cardano</Tab>
        <Tab>Dogecoin</Tab>
      </TabList>
      <TabPanel>
        <BitcoinChat />
      </TabPanel>
      <TabPanel>
        <EthereumChat />
      </TabPanel>
      <TabPanel>
        <CardanoChat />
      </TabPanel>
      <TabPanel>
        <DogeChat />
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabs;
