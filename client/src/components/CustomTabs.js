import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import BitcoinChat from "./chats/BitcoinChat";
import EthereumChat from "./chats/EthereumChat";

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
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabs;
