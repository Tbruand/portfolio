import React, { useEffect } from "react";
import { SVG } from "@svgdotjs/svg.js";
import "./style.css";

function ThemeMode() {
  useEffect(() => {
    const randomSlideToggle = document.getElementById(
      "theme"
    );

    const randomSlide = {
      element: randomSlideToggle,
      handler: svgSlideEffect,
      offset: 8,
      duration: 150,
      random: true,
    };
    new SvgToggleEffect(randomSlide);
  });

  class SvgToggleEffect {
    constructor(effect) {
      this.nodes = [
        ...effect.element.nextElementSibling.querySelectorAll(".row"),
      ];

      this.nodes.forEach((node, index) => {
        this.nodes[index] = SVG(node);
      });

      if (effect.random) {
        this.randomizeArray(this.nodes);
      }

      effect.element.addEventListener("change", () => {
        if (effect.element.checked) {
          effect.handler(this.nodes, false, effect.duration, effect.offset);
        } else {
          effect.handler(this.nodes, true, effect.duration, effect.offset);
        }
      });
    }

    randomizeArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  const svgSlideEffect = (
    nodes = [],
    reverse = false,
    duration = 100,
    offset = 10
  ) => {
    nodes.forEach((node, index) => {
      setTimeout(() => {
        if (reverse) {
          node.animate({ duration: duration }).transform({ translate: 0 });
        } else {
          node.animate({ duration: duration }).transform({ translate: 28 });
        }
      }, index * offset);
    });
  };
  return (
    <>
      <div className='input-container'>
        <input id='theme' type='checkbox' value='1' />
        <label
          id='random-slide-toggle-label'
          htmlFor='theme'
          className='control-label'
        >
          <svg
            className='switchSvg'
            height='36'
            width='100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g className='switch'>
              <g className='row'>
                <rect x='4' y='10' width='2' height='2' />
                <rect x='6' y='10' width='2' height='2' />
                <rect x='8' y='10' width='2' height='2' />
                <rect x='10' y='10' width='2' height='2' />
                <rect x='12' y='10' width='2' height='2' />
                <rect x='14' y='10' width='2' height='2' />
                <rect x='16' y='10' width='2' height='2' />
                <rect x='18' y='10' width='2' height='2' />
              </g>

              <g className='row'>
                <rect x='4' y='12' width='2' height='2' />
                <rect x='6' y='12' width='2' height='2' />
                <rect x='8' y='12' width='2' height='2' />
                <rect x='10' y='12' width='2' height='2' />
                <rect x='12' y='12' width='2' height='2' />
                <rect x='14' y='12' width='2' height='2' />
                <rect x='16' y='12' width='2' height='2' />
                <rect x='18' y='12' width='2' height='2' />
              </g>

              <g className='row'>
                <rect x='4' y='14' width='2' height='2' />
                <rect x='6' y='14' width='2' height='2' />
                <rect x='8' y='14' width='2' height='2' />
                <rect x='10' y='14' width='2' height='2' />
                <rect x='12' y='14' width='2' height='2' />
                <rect x='14' y='14' width='2' height='2' />
                <rect x='16' y='14' width='2' height='2' />
                <rect x='18' y='14' width='2' height='2' />
              </g>

              <g className='row'>
                <rect x='4' y='16' width='2' height='2' />
                <rect x='6' y='16' width='2' height='2' />
                <rect x='8' y='16' width='2' height='2' />
                <rect x='10' y='16' width='2' height='2' />
                <rect x='12' y='16' width='2' height='2' />
                <rect x='14' y='16' width='2' height='2' />
                <rect x='16' y='16' width='2' height='2' />
                <rect x='18' y='16' width='2' height='2' />
              </g>

              <g className='row'>
                <rect x='4' y='18' width='2' height='2' />
                <rect x='6' y='18' width='2' height='2' />
                <rect x='8' y='18' width='2' height='2' />
                <rect x='10' y='18' width='2' height='2' />
                <rect x='12' y='18' width='2' height='2' />
                <rect x='14' y='18' width='2' height='2' />
                <rect x='16' y='18' width='2' height='2' />
                <rect x='18' y='18' width='2' height='2' />
              </g>

              <g className='row'>
                <rect x='4' y='20' width='2' height='2' />
                <rect x='6' y='20' width='2' height='2' />
                <rect x='8' y='20' width='2' height='2' />
                <rect x='10' y='20' width='2' height='2' />
                <rect x='12' y='20' width='2' height='2' />
                <rect x='14' y='20' width='2' height='2' />
                <rect x='16' y='20' width='2' height='2' />
                <rect x='18' y='20' width='2' height='2' />
              </g>

              <g className='row'>
                <rect x='4' y='22' width='2' height='2' />
                <rect x='6' y='22' width='2' height='2' />
                <rect x='8' y='22' width='2' height='2' />
                <rect x='10' y='22' width='2' height='2' />
                <rect x='12' y='22' width='2' height='2' />
                <rect x='14' y='22' width='2' height='2' />
                <rect x='16' y='22' width='2' height='2' />
                <rect x='18' y='22' width='2' height='2' />
              </g>

              <g className='row'>
                <rect x='4' y='24' width='2' height='2' />
                <rect x='6' y='24' width='2' height='2' />
                <rect x='8' y='24' width='2' height='2' />
                <rect x='10' y='24' width='2' height='2' />
                <rect x='12' y='24' width='2' height='2' />
                <rect x='14' y='24' width='2' height='2' />
                <rect x='16' y='24' width='2' height='2' />
                <rect x='18' y='24' width='2' height='2' />
              </g>
            </g>
          </svg>
        </label>
      </div>
    </>
  );
}

export default ThemeMode;
