# Custom Salesforce Lightning Web Components (LWC) Example

This repository contains an example implementation of custom Salesforce Lightning Web Components (LWC) that demonstrate how to use picklist fields in a Lightning Datatable.

## Table of Contents
- [Introduction](#introduction)
- [Components](#components)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases a Salesforce Lightning Web Component (LWC) implementation that includes a custom Lightning Datatable component with picklist fields. The components provided in this project allow you to interact with and update picklist fields within a Datatable in a Salesforce Lightning environment.

## Components

- `c-picklist`: A custom LWC that implements a Lightning Combobox to handle picklist selection. It fires a custom event when the picklist value changes.

- `c-custom-datatable`: A custom LWC that extends the standard Lightning Datatable. It uses the `c-picklist` component to render picklist fields within the table. It includes editable fields that can be saved back to the Salesforce database.

## Usage

To use these components, follow these steps:

1. Ensure you have the necessary permissions to create and manage Lightning Web Components in your Salesforce environment.

2. Clone or download this repository.

3. Deploy the components to your Salesforce environment.

4. Integrate the `c-custom-datatable` component into your Lightning page or app. Pass the required attributes to configure the Datatable, including column definitions with picklist attributes.

5. Customize the picklist options and other attributes based on your Salesforce object's schema.

## Installation

To install and deploy these components in your Salesforce environment, follow these steps:

1. Use Salesforce CLI to authenticate to your Salesforce org.

2. Use the Salesforce CLI to deploy the components to your org:
   
   ```sh
   sfdx force:source:deploy -p force-app/main/default

## Contributing

Contributions are welcome! If you find any issues, have suggestions, or want to improve the project, feel free to create issues or pull requests. Please follow these guidelines when contributing:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and write clear, concise commit messages.

4. Open a pull request against the `main` branch of this repository.

5. Your pull request will be reviewed, and any necessary feedback will be provided.

## License

This project is licensed under the [MIT License](LICENSE). You can find more details in the [LICENSE](LICENSE) file.
