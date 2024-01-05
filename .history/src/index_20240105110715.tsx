import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  bitable,
  CurrencyCode,
  FieldType,
  ICurrencyField,
  ICurrencyFieldMeta,
} from "@lark-base-open/js-sdk";
import { Alert, AlertProps, Button, Select } from "antd";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadApp />
  </React.StrictMode>
);

function LoadApp() {
  useEffect(()=>{
    const fn = async () => {
      const tables = await bitable.base.getTableList();
      setInfo(`The table Name is ${tableName}`);
      setAlertType('success');
      const fieldMetaList = await table.getFieldMetaListByType<ICurrencyFieldMeta>(FieldType.Currency);
      setMetaList(fieldMetaList);
    };
    fn();
  })
  const base = bitable.base;

  const tableList = await base.getTableList();

  return (
    <div>
      <div style={{ margin: 10 }}>
        <div>选择表格</div>
        <Select
          style={{ width: 120 }}
          onSelect={setSelectFieldId}
          options={formatFieldMetaList(currencyFieldMetaList)}
        />
      </div>
      <div style={{ margin: 10 }}>
        <div>Select Currency</div>
        <Select
          options={CURRENCY}
          style={{ width: 120 }}
          onSelect={setCurrency}
        />
        <Button style={{ marginLeft: 10 }} onClick={transform}>
          transform
        </Button>
      </div>
    </div>
  );
}
