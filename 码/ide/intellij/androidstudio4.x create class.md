https://stackoverflow.com/questions/62339552/android-studio-intellij-new-java-class-wizard

Android Studio replaces file template variables with values in the generated Java file. You enter the values in the Create New Class dialog. The template has the following variables that you can use:

- IMPORT_BLOCK - A newline-delimited list of Java import statements necessary to support any superclass or interfaces, or an empty string (""). For example, If you only implement the Runnable interface and extend nothing, this variable will be `import java.lang.Runnable;\n`. If you implement the Runnable interface and extend the Activity class, it will be `import android.app.Activity;\nimportjava.lang.Runnable;\n`.
- VISIBILITY - Whether the class will have public access or not. It can have a value of `PUBLIC` or `PACKAGE_PRIVATE`.
- SUPERCLASS - A single class name, or empty. If present, there will be an extends `${SUPERCLASS}` clause after the new class name.
- INTERFACES - A comma-separated list of interfaces, or empty. If present, there will be an implements `${INTERFACES}` clause after the superclass, or after the class name if there’s no superclass. For interfaces and annotation types, the interfaces have the extends keyword.
- ABSTRACT - Whether the class should be abstract or not. It can have a value of `TRUE` or `FALSE`.
- FINAL - Whether the class should be final or not. It can have a value of `TRUE` or `FALSE`.

