import React from 'react';

import Button from './components/Button';
import './App.scss';

const App = () => {

  return (
    <div className="App">

      <div className="grid-container">

        {/* overview */}

        <div className="grid-item">
          <Button btnClickEvent={(e) => {
            e.preventDefault();
            alert('This is a default button');
          }} />
          <br />
          <Button disableShadow btnClickEvent={(e) => {
            e.preventDefault();
            alert('The shadow on this button is disabled');
          }} />
          <br />
          <Button variant="text" color="secondary" />
          <br />
          <Button variant="default" color="primary" />
          <br />
          <Button variant="outline" color="danger" />
        </div>

        {/* Text Buttons */}

        <div className="grid-item">
          <Button disabled size="lg" />
          <br />
          <Button variant="text" disabled />
          <br />
          <Button variant="text" text="Facebook" color="danger" endIcon="facebook" textTransform="lowercase" />
          <br />
          <Button variant="text" color="primary" text="Attach" startIcon="link" />
          <br />
          <Button variant="text" color="secondary" textTransform="lowercase" />
        </div>

        {/* Outline Buttons */}

        <div className="grid-item">
          <Button variant="outline" startIcon="shopping_bag" endIcon="lock" size="md" />
          <br />
          <Button variant="outline" startIconStyle="filled" startIcon="shopping_bag" endIconStyle="filled" endIcon="lock" />
          <br />
          <Button variant="outline" color="danger" textTransform="cpaitalize" startIcon="face" />
          <br />
          <Button variant="outline" color="secondary" endIcon="shopping_cart" textTransform="lowercase" />
          <br />
          <Button variant="outline" color="danger" startIconStyle="filled" startIcon="face" />
          <br />
          <Button variant="outline" color="secondary" endIconStyle="filled" endIcon="shopping_cart" size="lg" />
          <br />
          <Button variant="outline" text="Full Width" color="secondary" endIconStyle="filled" endIcon="shopping_cart" size="lg" fullWidth textTransform="uppercase" btnClickEvent={(e) => {
            e.preventDefault();
            alert('Given 100% width with the fullWidth attr');
          }} />
        </div>

        {/* Contained Buttons */}

        <div className="grid-item">
          <Button variant="default" startIcon="shopping_bag" endIcon="lock" size="md" />
          <br />
          <Button variant="default" startIconStyle="filled" startIcon="shopping_bag" endIconStyle="filled" endIcon="lock" />
          <br />
          <Button variant="default" color="danger" startIcon="face" textTransform="lowercase" />
          <br />
          <Button variant="default" color="secondary" endIcon="shopping_cart" />
          <br />
          <Button variant="default" color="danger" startIconStyle="filled" startIcon="face" />
          <br />
          <Button variant="default" color="primary" endIconStyle="filled" endIcon="shopping_cart" size="lg" textTransform="uppercase" />
          <br />
          <Button variant="default" text="Full Width" color="secondary" endIconStyle="filled" endIcon="shopping_cart" size="lg"
            fullWidth btnClickEvent={(e) => {
              e.preventDefault();
              alert('Given 100% width with the fullWidth attr');
            }} />
        </div>

      </div>

    </div>
  );
};

export default App;