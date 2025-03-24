export default function PCConfigurationAdd() {
    return (
        <div class="container">
            <h1>Add your PC configuration here:</h1>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="motherboard" placeholder="Motherboard" />
                <input type="text" name="cpu" placeholder="CPU" />
                <input type="text" name="gpu" placeholder="GPU" />
                <input type="text" name="ram" placeholder="RAM" />
                <input type="text" name="storage" placeholder="Storage" />
                <input type="text" name="psu" placeholder="PSU" />
                <input type="text" name="case" placeholder="Case" />
                <input type="text" name="image" placeholder="Image" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}