# Getting Started with modal-P14-olivier

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Link`

Link to npm-package
``` https://www.npmjs.com/package/modal-p14-olivier ```

### `Install`

Install the modal-p14-olivier with NPM:
```npm
npm i modal-p14-olivier
```

### `Usage`

Import the modal in your react project
```javascript
import Modal from "modal-p14-olivier"
```

Position the modal in your project and write your text in the 'content' props
```javascript
<Modal content='Employee Created' />
```

### `Style modification`

Look at the architecture with associated classNames to modify the style as desired

```javascript
<div className='modal-container'>
    <CloseIcon className='modal-close-icon' />
    <p className='modal-text'>
        {content}
        <CheckIcon className='check' />
    </p>
</div>
```