```aidl
https://github.com/FasterXML/jackson-module-jsonSchema

https://github.com/FasterXML/jackson-module-jsonSchema/blob/master/javax/src/test/java/com/fasterxml/jackson/module/jsonSchema/TestGenerateJsonSchema.java#L136

    implementation("com.fasterxml.jackson.module:jackson-module-jsonSchema-jakarta:2.16.0")
    
    
    
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.module.jsonSchema.JsonSchema;
import com.fasterxml.jackson.module.jsonSchema.JsonSchemaGenerator;

public class JsonSchemaGeneratorExample {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        JsonSchemaGenerator schemaGen = new JsonSchemaGenerator(mapper);
        JsonSchema schema = schemaGen.generateSchema(Student.class);

        String schemaString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(schema);
        System.out.println(schemaString);
    }
}
```