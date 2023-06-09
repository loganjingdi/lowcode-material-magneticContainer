## 何时使用

适合表单场景。

## 示例

```tsx
import React from 'react';
import { Input } from '@alifd/next';
import { ChildForm, ProForm } from '@alifd/fusion-ui';

const ProFormItem = ProForm.Item;

export default () => {
  return (
    <ChildForm
      operations={[
        { action: 'submit', type: 'primary', content: '提交' },
        { action: 'reset', type: 'secondary', content: '重置' },
        { action: 'custom', type: 'secondary', content: 'abc' },
      ]}
      emptyContent="添加表单项"
      operationConfig={{ align: 'operation-align-center' }}
      labelAlign="top"
      placeholderStyle={{
        border: 0,
        color: '#0088FF',
        background: '#d8d8d836',
        height: '38px',
        gridArea: 'span 4 / span 4',
      }}
      columns={3}
      placeholder="请在右侧面板添加表单项+"
      labelCol={{ fixedSpan: 4 }}
    >
      <ProFormItem
        required
        name="email"
        size="medium"
        componentProps={{ componentName: 'Input' }}
        label="表单项"
        device="desktop"
        primaryKey="9815"
      >
        <Input autoComplete="off" size="medium" hasBorder={true} />
      </ProFormItem>
      <ProFormItem
        size="medium"
        componentProps={{ componentName: 'Input' }}
        label="表单项"
        device="desktop"
        primaryKey="1961"
      >
        <Input autoComplete="off" size="medium" hasBorder={true} />
      </ProFormItem>
      <ProFormItem
        size="medium"
        componentProps={{ componentName: 'Input' }}
        label="表单项"
        device="desktop"
        primaryKey="6067"
      >
        <Input autoComplete="off" size="medium" hasBorder={true} />
      </ProFormItem>
    </ChildForm>
  );
};
```

## API

<API hideTitle  src="@/components/pro-form/layouts/child-form/index.tsx" />
