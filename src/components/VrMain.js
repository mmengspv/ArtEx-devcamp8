import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import eight from '../assets/8.jpg'
import nine from '../assets/9.jpg'
import ten from '../assets/10.jpg'
import eleven from '../assets/11.jpg'
import twelve from '../assets/12.jpg'

export default function VrMain() {
  return (
        <div>
                <Scene>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: one}} 
                                position={{x: 2.2, y: 1.75, z: -3.3}} rotation={{x: 0, y: 0, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: two}} 
                                position={{x: 0, y: 1.75, z: -3.3}} rotation={{x: 0, y: 0, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: three}} 
                                position={{x: -2.2, y: 1.75, z: -3.3}} rotation={{x: 0, y: 0, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: four}} 
                                position={{x: 3.3, y: 1.75, z: 2.2}} rotation={{x: 0, y: -90, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: five}} 
                                position={{x: 3.3, y: 1.75, z: 0}} rotation={{x: 0, y: -90, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: six}} 
                                position={{x: 3.3, y: 1.75, z: -2.2}} rotation={{x: 0, y: -90, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: seven}} 
                                position={{x: 2.2, y: 1.75, z: 3.3}} rotation={{x: 0, y: -180, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: eight}} 
                                position={{x: 0, y: 1.75, z: 3.3}} rotation={{x: 0, y: -180, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: nine}} 
                                position={{x: -2.2, y: 1.75, z: 3.3}} rotation={{x: 0, y: -180, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: ten}} 
                                position={{x: -3.3, y: 1.75, z: 2.2}} rotation={{x: 0, y: -270, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: eleven}} 
                                position={{x: -3.3, y: 1.75, z: 0}} rotation={{x: 0, y: -270, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                        <Entity geometry={{primitive: 'plane', height: '1.2', width: '1.7'}} material={{shader: 'flat', src: twelve}} 
                                position={{x: -3.3, y: 1.75, z: -2.2}} rotation={{x: 0, y: -270, z: 0}} 
                                event-set__mouseenter={{scale: '1.2 1.2 1'}} event-set__mouseleave={{scale: '1 1 1'}} event-set__click= {{_target: '#image-360', _delay: '300'}}
                                proxy-event={{event: 'click', to: '#image-360', as: 'fade'}}/>
                </Scene>
        </div>
  )
}
