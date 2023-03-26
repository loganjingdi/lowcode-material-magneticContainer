import * as React from 'react';
import './index.css';
import { WidthProvider, Responsive } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

export class RGLContainer extends React.Component {
    onGridLayoutChange(layout) {
        this.props._leaf.setPropValue('layout', layout.filter((item) => item.i))
    }

    render() {
        let { layout, _leaf, children } = this.props
        let childNodes = [];
        
        console.log("===jdliu RGL", this.props);
        this.props.children.forEach((child, index) => {
            let item = layout[index];
            childNodes.push(
            <div key={item.i} data-grid={{ w: item.w, h: item.h, x: item.x, y: item.y }}>
                { child }
            </div>)
        })

        return (
            <ResponsiveReactGridLayout layout={layout} onLayoutChange={(e) => this.onGridLayoutChange(e)} >
                {childNodes}
            </ResponsiveReactGridLayout>
        )
    }
}