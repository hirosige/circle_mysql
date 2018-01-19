import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

function Footer() {
  return (
    <div>
      <footer>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
          />
          <CardTitle title="Footer でーす" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </footer>
    </div>
  );
}

export default Footer;

