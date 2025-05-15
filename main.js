const fs = require('fs');
const path = require('path');

// Содержимое для .editorconfig - простой
const editorConfigContent = `
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
`;

// Содержимое для .prettierrc.js (CommonJS, совместимый с CRA) с коментами
const prettierConfigContent = `// Конфиг Prettier для React-проекта
// Документация: https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 90,    // Макс. длина строки
  tabWidth: 2,       // Отступ в пробелах
  useTabs: false,    // Не использовать табы
  semi: true,        // Точки с запятой
  singleQuote: true, // Одинарные кавычки
  trailingComma: 'all',     // Запятые в конце объектов/массивов
  bracketSpacing: true,     // Пробелы в { foo: bar }
  arrowParens: 'always',    // Скобки у стрелочных функций: (x) => x
  endOfLine: 'lf',          // Перенос строк в стиле Unix. незнаю надо или как
  jsxSingleQuote: true,     // Одинарные кавычки в JSX
  bracketSameLine: false,   // Тег ">" в JSX на новой строке. это надо
};
`;

// Функция для создания файла
function createConfigFile(filename, content) {
  const filePath = path.join(process.cwd(), filename);
  fs.writeFile(filePath, content.trim(), (err) => {
    if (err) {
      console.error(`Ошибка при создании ${filename}:`, err);
    } else {
      console.log(`✓ ${filename} успешно создан`);
    }
  });
}

// Создаем файлы в корне!
createConfigFile('.editorconfig', editorConfigContent);
createConfigFile('.prettierrc.js', prettierConfigContent);
