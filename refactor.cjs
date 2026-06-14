const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'wiki', 'ui', 'WikiPortfolioPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Refactor navbox
content = content.replace(
  /<div\s+className="namu-navbox"([\s\S]*?)>\s*<div\s+className="namu-navbox-header"([\s\S]*?)>\s*\[ 관련 문서 \]\s*<\/div>/g,
  `<details open className="namu-navbox"$1>\n          <summary\n            className="namu-navbox-header"$2>\n            [ 관련 문서 ]\n          </summary>`
);

// We need to change the closing </div> of namu-navbox to </details>.
// It's followed by "</div>\n        </div>\n\n        {/* 인포박스" 
content = content.replace(
  /<\/div>\n        <\/div>\n\n        \{\/\* 인포박스/g,
  `</div>\n        </details>\n\n        {/* 인포박스`
);

// 2. Refactor H3 wrappers (signatureStack, projects, academic, knowledge)
// They look like: <div key={s.id}>\n              <h3...
content = content.replace(
  /<div key=\{([a-zA-Z0-9.]+)\}>\s*<h3 id=\{`([^`]+)`\} className="namu-h3">\s*<span className="namu-secnum">([^<]+)<\/span>\s*([^<]+)\s*(?:\{[^}]+\}\s*)?<Edit \/>\s*<\/h3>/g,
  `<details open key={$1} className="namu-section">\n              <summary>\n                <h3 id={\`$2\`} className="namu-h3">\n                  <span className="namu-secnum">$3</span>\n                  $4\n                  <Edit />\n                </h3>\n              </summary>\n              <div className="namu-section-body">`
);
// We need to replace their closing </div> with </div></details>
// Actually, it's safer to just replace `</div>\n          ))} ` with `</div>\n            </details>\n          ))} `
// Wait, the inner content is wrapped in `<div className="namu-section-body">` now, so we need `</div></details>` where the original `</div>` was.
// The original `</div>` was right before `\n          ))} `
content = content.replace(
  /<\/div>\n          \}\)\}/g,
  `</div>\n            </details>\n          })}`
);


// 3. Refactor H2 sections
// Let's use a regex to match each h2 block until the next {/* N. or {/* 각주
// A block starts with {/* N. Title */}
const h2BlockRegex = /(\{\/\* \d+\. [^\*]+\*\/\}\s*<h2[\s\S]*?<\/h2>)([\s\S]*?)(?=\{\/\* (?:\d+\.|각주))/g;

content = content.replace(h2BlockRegex, (match, h2, body) => {
  // Extract the h2 and wrap it in <summary>
  // wrap the body in <div className="namu-section-body">
  return `<details open className="namu-section">\n            <summary>\n              ${h2.trim()}\n            </summary>\n            <div className="namu-section-body">\n${body}            </div>\n          </details>\n\n          `;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Refactoring complete.');
