<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link"/>

### Secure a PDf file and set restrictions

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/protect-pdf/)

Secure a PDF file with a password encrypt the document. Set an owner password and restrictions on certain features like printing, editing and copying in the PDF document to prevent end users from modifying it.

Support for AES-128 and AES-256 encryption on PDF files, with granular permissions for high and low quality printing and fill and sign form field restrictions.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-protectPDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node js

```js
// Create an ExecutionContext using credentials
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

// Create new permissions instance and add the required permissions
const protectPDF = PDFServicesSdk.ProtectPDF,
  protectPDFOptions = protectPDF.options,
  permissions = protectPDFOptions.Permissions.createNew();
    permissions.addPermission(protectPDFOptions.Permission.PRINT_LOW_QUALITY);
    permissions.addPermission(protectPDFOptions.Permission.EDIT_DOCUMENT_ASSEMBLY);
    permissions.addPermission(protectPDFOptions.Permission.COPY_CONTENT);

// Build ProtectPDF options by setting a User as well as an Owner/Permissions Password, Permissions,
// Encryption Algorithm (used for encrypting the PDF file) and specifying the type of content to encrypt.
const options = new protectPDFOptions.PasswordProtectOptions.Builder()
  .setUserPassword("openpassword")
  .setOwnerPassword("permissionspassword")
  .setPermissions(permissions)
  .setEncryptionAlgorithm(protectPDFOptions.EncryptionAlgorithm.AES_256)
  .setContentEncryption(protectPDFOptions.ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
  .build();

// Create a new operation instance.
const protectPDFOperation = protectPDF.Operation.createNew(options);

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/protectPDFInput.pdf');
  protectPDFOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
protectPDFOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/protectPDFOutput.pdf'))
```

#### .Net

```clike
  // Create an ExecutionContext using credentials.
  ExecutionContext executionContext = ExecutionContext.Create(credentials);

  // Create new permissions instance and add the required permissions
  Permissions permissions = Permissions.CreateNew();
  permissions.AddPermission(Permission.PRINT_LOW_QUALITY);
  permissions.AddPermission(Permission.EDIT_DOCUMENT_ASSEMBLY);
  permissions.AddPermission(Permission.COPY_CONTENT);

  // Build ProtectPDF options by setting a User as well as Owner/Permissions Password, Permissions,
  // Encryption Algorithm (used for encrypting the PDF file) and specifying the type of content to encrypt.
  ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.PasswordProtectOptionsBuilder()
    .SetUserPassword("openpassword")
    .SetOwnerPassword("permissionspassword")
    .SetPermissions(permissions)
    .SetEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
    .SetContentEncryption(ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
    .Build();

  // Create a new operation instance
  ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.CreateNew(protectPDFOptions);

  // Set operation input from a source file.
  FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"protectPDFInput.pdf");
  protectPDFOperation.SetInput(sourceFileRef);

  // Execute the operation.
  FileRef result = protectPDFOperation.Execute(executionContext);

  // Save the result to the specified location.
  result.SaveAs(Directory.GetCurrentDirectory() + "/output/protectPDFOutput.pdf");
```

#### Java

```javascript
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.create(credentials);

// Create new permissions instance and add the required permissions
Permissions permissions = Permissions.createNew();
permissions.addPermission(Permission.PRINT_LOW_QUALITY);
permissions.addPermission(Permission.EDIT_DOCUMENT_ASSEMBLY);
permissions.addPermission(Permission.COPY_CONTENT);

// Build ProtectPDF options by setting a User as well as Owner/Permissions Password, Permissions,
// Encryption Algorithm (used for encrypting the PDF file) and specifying the type of content to encrypt.
ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.passwordProtectOptionsBuilder()
  .setOwnerPassword("openpassword")
  .setUserPassword("permissionspassword")
  .setPermissions(permissions)
  .setEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
  .setContentEncryption(ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
  .build();

// Create a new operation instance.
ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.createNew(protectPDFOptions);

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile("src/main/resources/protectPDFInput.pdf");
protectPDFOperation.setInput(source);

// Execute the operation
FileRef result = protectPDFOperation.execute(executionContext);

// Save the result at the specified location
result.saveAs("output/protectPDFOutput.pdf");
```
