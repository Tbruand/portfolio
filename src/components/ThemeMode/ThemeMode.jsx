import React, { useEffect, useState } from "react";
import { SVG } from "@svgdotjs/svg.js";
import "./style.css";

function ThemeMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Lire le mode sombre du localStorage lors de l'initialisation
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const randomSlideToggle = document.getElementById("theme");

    const randomSlide = {
      element: randomSlideToggle,
      handler: svgSlideEffect,
      offset: 8,
      duration: 150,
      random: true,
    };

    const svgEffect = new SvgToggleEffect(randomSlide);

    if (isDarkMode) {
      svgEffect.animateNodes(false, randomSlide.duration, randomSlide.offset);
    } else {
      svgEffect.animateNodes(true, randomSlide.duration, randomSlide.offset);
    }

    // S'assurer que le bouton est dans le bon état
    randomSlideToggle.checked = isDarkMode;

  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const themeCheckbox = document.getElementById("theme");
    if (isDarkMode) {
      themeCheckbox.checked = true;
      localStorage.setItem('darkMode', 'true');
    } else {
      themeCheckbox.checked = false;
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

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
          this.animateNodes(false, effect.duration, effect.offset);
          setIsDarkMode(true);
        } else {
          this.animateNodes(true, effect.duration, effect.offset);
          setIsDarkMode(false);
        }
      });
    }

    randomizeArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    animateNodes(reverse, duration, offset) {
      this.nodes.forEach((node, index) => {
        setTimeout(() => {
          if (reverse) {
            node.animate({ duration: duration }).transform({ translate: 0 });
          } else {
            node.animate({ duration: duration }).transform({ translate: 28 });
          }
        }, index * offset);
      });
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
        <input
          id='theme'
          type='checkbox'
          checked={isDarkMode}
          value='1'
          onChange={handleThemeChange}
        />
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
