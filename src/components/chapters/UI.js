import {
  Column,
  Grid,
  Row,
  Form,
  FormGroup,
  Checkbox,
  NumberInput,
  Toggle,
  RadioButtonGroup,
  RadioButton,
  Select,
  SelectItem,
  FileUploader,
  TextInput,
  TextArea,
  Button,
  Search,
  Link,
} from 'carbon-components-react';
import { useState } from 'react';

const UI = () => {
  const [showUi, setShowUi] = useState(false);

  return (
    <Grid>
      <Row>
        <Column>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc,{' '}
          </p>
          <Button onClick={() => setShowUi(true)}>Reveal more UI</Button>
          <div>
            <Link href="https://www.carbondesignsystem.com/all-about-carbon/what-is-carbon/">
              Carbon UI Framework
            </Link>
          </div>
        </Column>
        <Column>
          <Form hidden={!showUi}>
            <FormGroup>
              <Checkbox defaultChecked labelText="Default Checked" />
              <Checkbox labelText="Checkbox" />
              <Checkbox disabled labelText="Disabled" />
            </FormGroup>

            <NumberInput />

            <FormGroup>
              <Toggle />
              <Toggle disabled />
            </FormGroup>

            <FormGroup>
              <FileUploader
                labelDescription="Choose Files..."
                buttonLabel="Upload"
              />
            </FormGroup>

            <FormGroup>
              <RadioButtonGroup
                name="radio-button-group"
                defaultSelected="default-selected"
              >
                <RadioButton
                  value="standard"
                  id="radio-1"
                  labelText="Standard Radio Button"
                />
                <RadioButton
                  value="default-selected"
                  labelText="Default Selected Radio Button"
                  id="radio-2"
                />
                <RadioButton
                  value="blue"
                  labelText="Standard Radio Button"
                  id="radio-3"
                />
                <RadioButton
                  value="disabled"
                  labelText="Disabled Radio Button"
                  id="radio-4"
                  disabled
                />
              </RadioButtonGroup>
            </FormGroup>

            <FormGroup>
              <Search placeholder="Search" />
            </FormGroup>

            <Select className="margin-ui" defaultValue="placeholder-item">
              <SelectItem
                disabled
                hidden
                value="placeholder-item"
                text="Choose an option"
              />
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
              <SelectItem value="option-3" text="Option 3" />
            </Select>

            <TextInput className="margin-ui" labelText="TextInput" />
            <TextArea className="margin-ui" labelText="TextArea" />
          </Form>
        </Column>
      </Row>
    </Grid>
  );
};
export default UI;
