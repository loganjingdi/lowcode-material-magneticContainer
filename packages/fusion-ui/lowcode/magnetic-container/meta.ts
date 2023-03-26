import { ComponentMetadata, Snippet } from '@ali/lowcode-types';

const MagneticMeta: ComponentMetadata = {
    componentName: 'MagneticContainer',
    title: '磁吸布局',
    category: '布局容器类',
    group: '精选组件',
    npm: {
        package: '@alifd/fusion-ui',
        version: '1.0.8',
        exportName: 'MagneticContainer',
        main: '',
        destructuring: true,
        subName: '',
    },
    props: [

    ],
    configure: {
        component: { isContainer: true },
        supports: { style: true },
        advanced: { isAbsoluteLayoutContainer: true },
    }
};

const snippets: Snippet[] = [
    {
        title: '磁吸布局',
        screenshot:
            'https://img.alicdn.com/imgextra/i2/O1CN01ChN5mm1txOQnh6kTh_!!6000000005968-55-tps-56-56.svg',
        schema: {
            componentName: 'MagneticContainer',
            props: {

            }
        }
    }
]

export default {
    ...MagneticMeta,
    snippets: snippets,
}