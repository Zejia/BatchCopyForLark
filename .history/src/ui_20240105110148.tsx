import {
  bitable,
  CurrencyCode,
  FieldType,
  ICurrencyField,
  ICurrencyFieldMeta,
} from "@lark-base-open/js-sdk";

export async function showDialogChooseTable() {
  const { tableId, viewId } = await bitable.base.getSelection();
}
