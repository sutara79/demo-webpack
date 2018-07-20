<?php
use PHPUnit\Framework\TestCase;
use myapp\DbController;

/**
 * @coversDefaultClass myapp\DbController
 */
final class DbControllerTest extends TestCase
{
    /**
     * @covers ::getInfo
     */
    public function testCanBeCreatedFromUserInput()
    {
        $dbc = new DbController();
        $this->assertEquals(
            'Hello-processed',
            $dbc->getInfo('Hello')
        );
    }
}
