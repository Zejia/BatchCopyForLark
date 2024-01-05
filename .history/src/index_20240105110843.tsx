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
  const [tabls, setTables] = useState<Array>([]);
  // const [info, setInfo] = useState('get table name, please waiting ....');
  // const [alertType, setAlertType] = useState<AlertProps['type']>('info');
  // const [currencyFieldMetaList, setMetaList] = useState<ICurrencyFieldMeta[]>([])
  // const [selectFieldId, setSelectFieldId] = useState<string>();
  // const [currency, setCurrency] = useState<CurrencyCode>();

  useEffect(() => {
    const fn = async () => {
      const tables = await bitable.base.getTableList();
      setTables(tables);
    };
    fn();
  });

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
